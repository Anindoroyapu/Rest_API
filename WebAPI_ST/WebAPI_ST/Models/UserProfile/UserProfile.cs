using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI_ST.Models.UserProfile
{
    public class UserProfile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(300)]
        public string FirstName { get; set; } = "";

        [MaxLength(300)]
        public string LastName { get; set; } = "";
    }
}
