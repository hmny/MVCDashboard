﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CSOM.STS.DataAccess;
using CSOM.STS.DataAccess.Repositories;
using Dashboard.Models.Queries;

namespace Dashboard.Models
{
    public class BaseProgramViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}