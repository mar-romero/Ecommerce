import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        const list = res.data.sort((a,b)=>{
          return a._id - b._id
      })
        setIncome(list);
        setPerc((list[1].total * 100) / list[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  return (
    
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Ingresos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total-income[0]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costo</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
    </div>
  );
}