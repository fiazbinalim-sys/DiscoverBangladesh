/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { Key } from "lucide-react";
import { authToastError, authToastSuccess } from "@/utils/authToast";

const ResetPassword = () => {
    const [form] = Form.useForm();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const handleChangePassword = async (data: any) => {
        const toastId = toast.loading("Updating Password ...");
        try {
            const res = await resetPassword(data).unwrap();
            if (res?.success) {
                authToastSuccess(
                    res?.message || "Password has been reset successfully.",
                    { id: toastId }
                );
                form.resetFields();
            } else {
                authToastError(res?.message || "Failed to update!", { id: toastId });
            }
        } catch (error) {
            const apiError = error as {
                data?: {
                    message?: string;
                    data?: { message?: string };
                    errorMessages?: Array<{ message?: string }>;
                };
                message?: string;
            };

            const errorMessage =
                apiError?.data?.errorMessages?.[0]?.message ||
                apiError?.data?.message ||
                apiError?.data?.data?.message ||
                apiError?.message ||
                "An unexpected error occurred.";

            authToastError(errorMessage, { id: toastId });
        }
    };

    return (
        <div className="flex justify-center items-center py-10 lg:min-h-[calc(100vh-110px)] font-poppins">
            <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-lg ">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">
                    Reset Password
                </h2>
                <Form
                    name="change-password"
                    onFinish={handleChangePassword}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Please input a valid email!" },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="text-gray-400" />}
                            placeholder="Email"
                            className="rounded-md py-2.5"
                        />
                    </Form.Item>

                    <Form.Item
                        name="oldPassword"
                        rules={[
                            { required: true, message: "Please input your old password!" },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="text-gray-400" />}
                            placeholder="Old Password"
                            className="rounded-md py-2.5"
                        />
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        rules={[
                            { required: true, message: "Please input your new password!" },
                        ]}
                    >
                        <Input.Password
                            prefix={<Key size={15} className="text-gray-400" />}
                            placeholder="New Password"
                            className="rounded-md py-2.5"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={["newPassword"]}
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your new password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("newPassword") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("New password and confirm password do not match!")
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<Key size={15} className="text-gray-400" />}
                            placeholder="Confirm New Password"
                            className="rounded-md py-2.5"
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-[#004D6E] text-white font-medium text-base py-3 px-5 rounded hover:bg-[#004D6E]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Updating..." : "Change Password"}
                            </button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;
