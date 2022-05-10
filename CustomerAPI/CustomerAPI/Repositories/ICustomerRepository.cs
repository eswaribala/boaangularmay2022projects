using CustomerAPI.Models;

namespace CustomerAPI.Repositories
{
    public interface ICustomerRepository
    {
        Customer AddCustomer(Customer customer);
        Customer UpdateCustomer(Customer customer);
        Boolean DeleteCustomerById(long CustomerId);
        Customer GetCustomerById(long CustomerId); 
        IEnumerable<Customer> GetAllCustomers();

    }
}
