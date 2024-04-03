﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_ST.Data;
using WebAPI_ST.Models;

namespace WebAPI_ST.Controllers
{
    [Route("api/brand")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly BrandContext _dbContext;

        public BrandController (BrandContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Brand>>> GetBrands(int Id)
        {
            var result = _dbContext.Brands.Find(Id);
            if (result == null)
            {
                return NotFound();
            }
            return await _dbContext.Brands.ToListAsync();

        }

        [HttpGet]
        public async Task<ActionResult<Brand>> GetBrand(int id)
        {
            if (_dbContext.Brands == null)
            {
                return NotFound();
            }
            var brand = await _dbContext.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound();

            }
            return new JsonResult(brand);
        }


        [HttpPost]
        public IActionResult Post(Brand brand)
        {
            _dbContext.Brands.Add(brand);
            _dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetBrand), brand);
        }




    }
}
