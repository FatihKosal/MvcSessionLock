using System;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.SessionState;

namespace MvcSessionLock.Controllers
{
    public class MyControllerFactory : DefaultControllerFactory
    {
        protected override SessionStateBehavior GetControllerSessionBehavior(RequestContext requestContext, Type controllerType)
        {
            return SessionStateBehavior.Disabled;
        }
    }
}