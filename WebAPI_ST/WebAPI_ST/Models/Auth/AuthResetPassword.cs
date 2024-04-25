namespace WebAPI_ST.Models.Auth
{
    public class AuthResetPassword
    {
    }

    public class AuthResetPasswordVerifyIdentity
    {
        public string Email { get; set; } = "";
    }

    public class AuthResetPasswordVerifyCode
    {
        public string Email { get; set; } = "";

        public string Secret { get; set; } = "";

        public string Code { get; set; } = "";
    }

    public class AuthResetPasswordUpdate
    {
        public string Email { get; set; } = "";

        public string Secret { get; set; } = "";

        public string Code { get; set; } = "";

        public string Password1 { get; set; } = "";

        public string Password2 { get; set; } = "";
    }
}
