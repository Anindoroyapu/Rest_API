// Ignore Spelling: Utils

using System.Net;

namespace MiracleWebAPI.Utils
{
    public class Tools
    {
        public static int ParseInt(string? str)
        {
            if (string.IsNullOrEmpty(str))
            {
                return 0;
            }

            int.TryParse(str, out int result);
            return result;
        }

        public static long GetIp(HttpRequest request)
        {
            var ip = request.HttpContext.Connection.RemoteIpAddress;
            if (ip == null)
            {
                return 0;
            }

            var ipBytes = ip.GetAddressBytes();
            if (ipBytes.Length == 4)
            {
                return ipBytes[0] << 24 | ipBytes[1] << 16 | ipBytes[2] << 8 | ipBytes[3];
            }

            return 0;
        }

        public static string GenerateSecretKey(int length = 32)
        {
            //--Generate Random String
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[length];
            var random = new Random();

            for (var i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            //--Return
            return new String(stringChars);
        }

        public static string GenerateOTP(int length = 6)
        {
            //--Generate Random String
            var chars = "0123456789";
            var stringChars = new char[length];
            var random = new Random();

            for (var i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            //--Return
            return new String(stringChars);
        }
    }
}
