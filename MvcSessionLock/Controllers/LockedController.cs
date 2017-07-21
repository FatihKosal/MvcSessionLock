using System;
using System.Web.Mvc;

namespace MvcSessionLock.Controllers
{
    public class LockedController : Controller
    {
        public string LockedMethod(string timeStamp)
        {            
            System.Threading.Thread.Sleep(1000);
            return DateTime.Now.ToString();
        }
    }
}