function TickerRow({ coins, duration = "35s" }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex w-[200%] animate-marquee"
        style={{ animationDuration: duration }}
      >
        {/* FIRST SET */}
        <div className="flex w-1/2 whitespace-nowrap">
          {coins.map((coin, i) => (
            <TickerItem key={`a-${i}`} {...coin} />
          ))}
        </div>

        {/* SECOND SET (IDENTICAL) */}
        <div className="flex w-1/2 whitespace-nowrap">
          {coins.map((coin, i) => (
            <TickerItem key={`b-${i}`} {...coin} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TickerItem({ name, price, change }) {
  return (
    <div className="mx-10 flex items-center gap-2 text-sm font-semibold">
      <span className="text-yellow-400">{price}</span>
      <span className="text-white">{name}</span>
      <span
        className={
          change.startsWith("+") ? "text-green-400" : "text-red-500"
        }
      >
        {change}
      </span>
    </div>
  );
}

export default function CryptoTicker() {
  const row1 = [
    { name: "ABT", price: "$0.23016", change: "-13.1%" },
    { name: "TIA", price: "$0.49112", change: "-13.2%" },
    { name: "AI", price: "$0.03768", change: "-14.3%" },
    { name: "NAKA", price: "$0.10852", change: "-15.4%" },
    { name: "VEE", price: "$0.00929", change: "+6.8%" },
    { name: "DEXT", price: "$0.23093", change: "+6.9%" },
    { name: "BTC", price: "$92873", change: "-2.4%" },
  ];

  const row2 = [
    { name: "AR", price: "$12.7883", change: "-6.2%" },
    { name: "DASH", price: "$85.7030", change: "+9.5%" },
    { name: "XVG", price: "$0.00793", change: "+10.5%" },
    { name: "ROSE", price: "$0.01655", change: "+19.8%" },
    { name: "PIVX", price: "$0.19386", change: "+3.1%" },
    { name: "ETH", price: "$3204", change: "-3.4%" },
  ];

  return (
    <div className="bg-black pt-2 pb-6 space-y-4 pointer-events-none">
      <TickerRow coins={row1} duration="35s" />
      <TickerRow coins={row2} duration="45s" />
    </div>
  );
}
