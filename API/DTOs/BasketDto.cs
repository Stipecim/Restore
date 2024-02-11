using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class BasketDto
    {
        public int Id {get; set;}

        public string BuyerId {get; set;} = string.Empty;
        public List<BasketItemDto> Items {get; set;} = new();
    }

}