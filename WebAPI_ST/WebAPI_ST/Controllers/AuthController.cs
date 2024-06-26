﻿using Microsoft.AspNetCore.Mvc;
using WebAPI_ST.Data;
using WebAPI_ST.Models.Auth;
<<<<<<< HEAD
using Microsoft.EntityFrameworkCore;
using MiracleWebAPI.Utils;
using System.Security.Cryptography;
using WebAPI_ST.Models.UserProfile;
using WebAPI_ST.Utils;
=======
>>>>>>> parent of f1f7ba4 (signUp_login_token_API_done)

namespace WebAPI_ST.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly BrandContext _context;
        public AuthController(BrandContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<ActionResult<IEnumerable<Auth>>> AuthLogin(AuthLogin authLogin)
        {
<<<<<<< HEAD

            //Validation
            var validate = AuthValidate.ValidateLoginPost(authLogin);

            if (validate.Status != 0)
            {
                return Ok(ApiResponseHandler.Error(validate.Title));
            }

            //Check user on DB
            var userInfo = await _context.UserProfile.FirstOrDefaultAsync(u => (u.PrimaryPhone == authLogin.Username || u.PrimaryEmail == authLogin.Username) && u.Status == "active");

            if (userInfo == null)
            {
                return Ok(ApiResponseHandler.Error("User Not Found"));
            }

            //--Match Password
            var passwordMatch = BCrypt.Net.BCrypt.Verify(authLogin.Password, userInfo.Password);
            if (!passwordMatch)
            {
                return Ok(ApiResponseHandler.Error("Password Doesn't Match"));
            }

            var tokenStr = await AuthOperation(_context, Request, _config, userInfo);
            if (tokenStr == "")
            {
                return Ok(ApiResponseHandler.Error("Token Not Generated"));
            }

            //--Return
            return Ok(ApiResponseHandler.Success("Login", new
            {
                Token = tokenStr,
            }));
        }

        private Task<string> AuthOperation(ApplicationDbContext context, HttpRequest request, IConfiguration config, object userInfo)
        {
            throw new NotImplementedException();
        }


        //api/auth/registration
        [HttpPost("create-account")]
        public async Task<ActionResult<IEnumerable<Auth>>> AuthCreateAccount(AuthRegistration authRegistration)
        {
            //--Validate
            var validate = AuthValidate.ValidateRegistrationPost(authRegistration);
            if (validate.Status != 0)
            {
                return Ok(ApiResponseHandler.Error(validate.Title));
            }

            //--Check If PrimaryEmail Already Exist
            var emailExist = await _context.UserProfile.FirstOrDefaultAsync(u => u.UserName == authRegistration.Email || u.PrimaryEmail == authRegistration.Email);
            if (emailExist != null)
            {
                return Ok(ApiResponseHandler.Error("Email Already Exist", "Email"));
            }

            //--Check If Primary Phone Already exist
            var phoneExist = await _context.UserProfile.FirstOrDefaultAsync(x => x.UserName == authRegistration.Phone || x.PrimaryPhone == authRegistration.Phone);
            if (phoneExist != null)
            {
                return Ok(ApiResponseHandler.Error("Phone Number Already Exist"));
            }

            //--Creating User
            var user = new UserProfile
            {
                FirstName = authRegistration.FirstName,
                LastName = authRegistration.LastName,
                PrimaryEmail = authRegistration.Email,
                PrimaryPhone = authRegistration.Phone,
                UserName = "",
                DateOfBirth = 0,
                Gender = "",
                Password = BCrypt.Net.BCrypt.HashPassword(authRegistration.Password),
                Status = "active"
            };

            _context.UserProfile.Add(user);
            await _context.SaveChangesAsync();

            return Ok(ApiResponseHandler.Success("Account Created Successfully"));
=======
            var userInfo = await _context.UserProfile.FirstOrDefaultAsync(u => (u.UserName == authLogin.Username || u.PrimaryEmail == authLogin.Username) && u.Status == "active" && u.TimeDeleted == 0);
>>>>>>> parent of f1f7ba4 (signUp_login_token_API_done)
        }
    }
}
