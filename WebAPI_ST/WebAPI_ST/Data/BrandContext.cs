using Microsoft.EntityFrameworkCore;
using WebAPI_ST.Models;

namespace WebAPI_ST.Data
{
    public class BrandContext    : DbContext
    {
        public DbSet<Brand> Brands { get; set; }
        public BrandContext(DbContextOptions<BrandContext> options) : base(options)
        {
            //--
        }

        public DbSet<UserProfile> UserProfile { get; set; } = default!;

    }
}
