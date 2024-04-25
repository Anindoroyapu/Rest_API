using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MiracleWebAPI.Utils
{
    public class JwtOperation
    {
        public static string? GetJti(string? token)
        {
            if (token == null)
            {
                return null;
            }

            try
            {
                var handler = new JwtSecurityTokenHandler();
                var jsonToken = handler.ReadToken(token);
                var tokenS = handler.ReadToken(token) as JwtSecurityToken;

                if (tokenS != null)
                {
                    return tokenS.Claims.First(claim => claim.Type == "jti").Value;
                }

                return null;
            }
            catch // (Exception e)
            {
                return null;
            }
        }

        public static JwtData? GetJwtData(string token)
        {
            try
            {
                var handler = new JwtSecurityTokenHandler();
                var jsonToken = handler.ReadToken(token);
                var tokenS = handler.ReadToken(token) as JwtSecurityToken;

                if (tokenS != null)
                {
                    return new JwtData
                    {
                        Jti = tokenS.Claims.First(claim => claim.Type == "jti").Value,
                        Sub = tokenS.Claims.First(claim => claim.Type == "sub").Value,
                        Email = tokenS.Claims.First(claim => claim.Type == "email").Value,
                        Exp = tokenS.Claims.First(claim => claim.Type == "exp").Value,
                        Aud = tokenS.Claims.First(claim => claim.Type == "aud").Value,
                    };
                }

                return null;
            }
            catch // (Exception e)
            {
                return null;
            }
        }

        public static string MkJwtToken(IConfiguration _config, string jti, string? sub, string? email, DateTime exp, string aud)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_config["Jwt:Key"] ?? "");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new[] {
                        new Claim("jti", jti),
                        new Claim("sub", sub ?? ""),
                        new Claim("email", email ?? ""),
                        new Claim("aud", aud)
                    }
                ),
                Expires = exp,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }

    public class JwtData
    {
        public string? Jti { get; set; }
        public string? Sub { get; set; }
        public string? Email { get; set; }
        public string? Exp { get; set; }
        public string? Aud { get; set; }
    }
}
