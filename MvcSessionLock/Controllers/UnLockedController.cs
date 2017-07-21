using System;
using System.Web.Mvc;
using System.Web.SessionState;

namespace MvcSessionLock.Controllers
{
    [SessionState(SessionStateBehavior.Disabled)]
    public class UnLockedController : Controller
    {      
        public string UnLockedMethod()
        {            
            System.Threading.Thread.Sleep(1000);
            return DateTime.Now.ToString();
        } 
    }
}