import Chart from "../../components/chart/Chart";
import ChartOrder from "../../components/chartOrder/ChartOrder";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const [orderStats, setOrderStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const list = res.data.sort((a,b)=>{
          return a._id - b._id
      })
        list.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Usuarios creados": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  
  useEffect(() => {
    const getStatsOrder = async () => {
      try {
        const res = await userRequest.get("/orders/income");
        const list = res.data.sort((a,b)=>{
          return a._id - b._id
      })
        list.map((item) =>
          setOrderStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Ingreso": item.total },
          ])
        );
      } catch {}
    };
    getStatsOrder();
  }, [MONTHS]);
    return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="Analisis de Usuarios"
        grid
        dataKey="Usuarios creados"
      />
      <ChartOrder
        data={orderStats}
        title="Analisis de Ingresos"
        grid
        dataKey="Ingreso"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}