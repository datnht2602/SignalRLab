using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SignalRLab.Models
{
    public class Products
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProID {get; set;}
        public string ProName { get; set; }
        public string Category { get; set; }
        public decimal UnitPrice { get; set; }
        public int StockQty { get; set; }
    }
}