using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Index : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string action = Request.QueryString["action"];
        if (action == "checkLoginState")
            CheckUserState();
        else if (action == "getOnline")
            GetOnline();
        else if (action == "sendMsg")
            SendMessage(Request.QueryString["con"], Request.QueryString["d"]);
        else if (action == "getMsg")
            GetMessage();
        else if (action == "exit")
            Exit();      
    }

    //发送消息
    protected void SendMessage(string msg,string time)
    {
        Regex reg = new Regex(@"(<:\d{1,2}:>)"); //匹配表情格式的字符
        MatchCollection mc = reg.Matches(msg);
        foreach (Match m in mc)
        {
            switch (m.Value)
            {
                case "<:1:>": msg = msg.Replace("<:1:>", "<img src='Images/1.gif' />"); break;
                case "<:2:>": msg = msg.Replace("<:2:>", "<img src='Images/2.gif' />"); break;
                case "<:3:>": msg = msg.Replace("<:3:>", "<img src='Images/3.gif' />"); break;
                case "<:4:>": msg = msg.Replace("<:4:>", "<img src='Images/4.gif' />"); break;
                case "<:5:>": msg = msg.Replace("<:5:>", "<img src='Images/5.gif' />"); break;
                case "<:6:>": msg = msg.Replace("<:6:>", "<img src='Images/6.gif' />"); break;
                case "<:7:>": msg = msg.Replace("<:7:>", "<img src='Images/7.gif' />"); break;
                case "<:8:>": msg = msg.Replace("<:8:>", "<img src='Images/8.gif' />"); break;
                case "<:9:>": msg = msg.Replace("<:9:>", "<img src='Images/9.gif' />"); break;
                case "<:10:>": msg = msg.Replace("<:10:>", "<img src='Images/10.gif' />"); break;
                default:break;
            }
        }
        Application.Lock(); //锁定application防止多用户同时登录
        if (Application["msg"] != null)
            Application["msg"] += "<li>" + Session["user"] + "&nbsp;于&nbsp;" + time + "&nbsp;说：" + msg + "</li>";
        else  
            Application["msg"] = "<li>" + Session["user"] + "&nbsp;于&nbsp;" + time + "&nbsp;说：" + msg + "</li>";
        Application.UnLock();
        Response.Write("success");
    }

    //获取消息
    protected void GetMessage()
    {
        Response.Write(Application["msg"]);
    }

    //用户登录状态判断
    protected void CheckUserState()
    {
        if (Session["user"] != null)
            Response.Write("true");
        else
            Response.Write("false");
    }

    //用户退出后销毁用户信息和聊天内容
    protected void Exit()
    {
        Session.Abandon();
        Application.RemoveAll();
    }

    //获取在线用户
    protected void GetOnline()
    {
        if (Application["user"] != null)
            Response.Write("<li>" + Application["user"] + "</li>");
        else
            Response.Write("null");
    }
}