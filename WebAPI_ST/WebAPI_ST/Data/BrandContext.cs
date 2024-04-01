using Microsoft.EntityFrameworkCore;

namespace WebAPI_ST.Data
{
    public class BrandContext : DbContext
    {
        public BrandContext(DbContextOptions<BrandContext> options) : base(options)
        {

        }

        DbSet<BrandContext> Brands { get; set; }
    }
}
