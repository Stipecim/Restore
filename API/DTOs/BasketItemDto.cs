using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class BasketItemDto
    {
        public int ProductId {get; set;}

        public string Name {get; set;} = string.Empty;

        public long Price {get; set;}

        public string PictureUrl {get; set;} = string.Empty;

        public string Brand {get; set;} = string.Empty;

        public string Type {get; set;} = string.Empty;

        public int Quantity {get; set;} 
    }
}