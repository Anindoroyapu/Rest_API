using Microsoft.AspNetCore.Mvc;
using WebAPI_ST.Data;
using WebAPI_ST.Models.Auth;

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
            var userInfo = await _context.UserProfile.FirstOrDefaultAsync(u => (u.UserName == authLogin.Username || u.PrimaryEmail == authLogin.Username) && u.Status == "active" && u.TimeDeleted == 0);
        }
    }
}
