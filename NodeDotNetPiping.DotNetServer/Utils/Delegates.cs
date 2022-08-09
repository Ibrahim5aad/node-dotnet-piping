using NodeDotNetPiping.DotNetServer.Utils.EventsArgs;

namespace NodeDotNetPiping.DotNetServer.Utils
{

	public delegate void ConnectEvent(object sender, EventArgs args);

	public delegate void DisconnectEvent(object sender, EventArgs args);

	public delegate void MessageEvent(object sender, MessageEventArgs args);

}
