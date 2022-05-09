using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerAPI.Models
{
    [Owned]
    public class FullName
    {
        [Column("First_Name")]
        [Required]
        public string FirstName { get; set; }
        [Column("Last_Name")]
          [Required]
        public string LastName { get; set; }
        [Column("Middle_Name")]
        public string MiddleName { get; set; }

        public FullName(string firstName, string lastName, string middleName)
        {
            FirstName = firstName;
            LastName = lastName;
            MiddleName = middleName;
        }
    }
}
