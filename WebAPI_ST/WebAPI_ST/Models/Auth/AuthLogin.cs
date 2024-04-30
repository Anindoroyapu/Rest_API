namespace WebAPI_ST.Models.Auth
{
    public class AuthLogin
    {
        public string Role { get; set; } = "";

        public string Username { get; set; } = "";

        public string Password { get; set; } = "";

        public string SecretKey { get; set; } = "";

    }

    public class AuthLogout
    {
        public string Token { get; set; } = "";
    }
}
