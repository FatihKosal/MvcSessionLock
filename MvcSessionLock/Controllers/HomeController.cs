using System.Web.Mvc;

namespace MvcSessionLock.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            Session["Deger"] = 1;
            return View();
        }     
       
    }
}