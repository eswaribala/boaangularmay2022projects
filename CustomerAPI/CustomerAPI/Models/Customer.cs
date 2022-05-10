using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerAPI.Models
{
    [Table("Customer")]
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        [Column("Customer_Id")]
        public long CustomerId { get; set; }
        public FullName Name { get; set; }
        [Column("Country")]
        public string? Country { get; set; }
       
        
    }
}
