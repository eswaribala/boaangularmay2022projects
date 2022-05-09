using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerAPI.Models
{
    [Table("Address")]
    public class Address
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Address_Id")]
        public long AddressId { get; set; }
        [Column("Door_No")]
        public string DoorNo { get; set; }
        [Column("City")]
        public string City { get; set; }
        [Column("State")]
        public string State { get; set; }
        [RegularExpression(@"^\d{6}$")]
        [Column("Zip_Code")]
        public long ZipCode { get; set; }
        [ForeignKey("Customer")]
        [Column("Customer_Id")]
        public long CustomerId { get; set; }
        public Customer Customer { get; set; }

        public Address(long addressId, string doorNo, string city, string state, long zipCode, long customerId, Customer customer)
        {
            AddressId = addressId;
            DoorNo = doorNo;
            City = city;
            State = state;
            ZipCode = zipCode;
            CustomerId = customerId;
            Customer = customer;
        }
    }
}
