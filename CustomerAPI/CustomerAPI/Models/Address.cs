namespace CustomerAPI.Models
{
    public class Address
    {
        public string DoorNo { get; set; }
        public string City { get; set; }

        public string State { get; set; }   
        public long ZipCode { get; set; }


        public Customer Customer { get; set; }
    }
}
