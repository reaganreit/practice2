import { useContext, useEffect } from "react";
import Header from "../Components/Header";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { margin, width } from "@mui/system";
import { Link } from "react-router-dom";

import ExcessReport from "./ExcessReport";
import PopularCombos from "./PopularCombos";
import POSReport from "./POSReport";
import TranslatedText from "./TranslatedText";

// contexts
import { UserContext } from "../contexts/user";
import { LanguageContext } from '../contexts/language';


function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
  ];

const Statistics = () => {
    const {lang, setLang} = useContext(LanguageContext)

  const theme = useTheme();
  return (
    <div style={{height: "100%"}}>
        <Header title = "Statistics" path = "/cashiergui"></Header>

        <span className="statsContainer" style={{
            borderTop: "5%",
            display: "flex",
            height: "100%",
            paddingTop: "5%",
            paddingRight: "10%",
            paddingLeft: "10%"
        }}>
            <div className="leftComponent" style={{
                width: "45%",
                height: "75%",
                marginRight: "10%"
            }}>
                <table style = {{
                    width: "100%",
                    height: "70%",
                    backgroundColor: "blue",
                    color: "white"
                }}>
                    <tr>
                        <td><TranslatedText text = {"Gross Revenue"} key = {lang}/></td>
                        <td>$10,000</td>
                    </tr>
                    <tr>
                    <td><TranslatedText text = {"Credit"} key = {lang}/></td>
                        <td>$5,000</td>
                    </tr>
                    <tr>
                    <td><TranslatedText text = {"Dining"} key = {lang}/></td>
                        <td>$5,000</td>
                    </tr>
                    <tr>
                    <td><TranslatedText text = {"Orders"} key = {lang}/></td>
                        <td>1000</td>
                    </tr>
                </table>

                <div className="reportButtonsContainer" style={{
                    marginTop: "15%",
                }}>
                    <Link to="/posreport" style={{ textDecoration:"none" }}>
                        <Button className = "reportButtons" style ={{backgroundColor:"red", width: "25%"}} variant = "contained" >POS <br /> <TranslatedText  text = {"Report"} key = {lang}/></Button>
                    </Link>
                    <Link to="/popularcombos" style={{ textDecoration:"none" }}>
                        <Button className = "reportButtons" style ={{backgroundColor:"red", width: "25%", marginLeft: "12.5%"}} variant = "contained" ><TranslatedText  text = {"Popular Combos"} key = {lang}/></Button>
                    </Link>
                    <Link to="/excessreport" style={{ textDecoration:"none" }}>
                        <Button className = "reportButtons" style ={{backgroundColor:"red", width: "25%", marginLeft: "12.5%"}} variant = "contained" ><TranslatedText  text = {"Excess Report"} key = {lang}/></Button>
                    </Link>
                </div>

            </div>

            <ResponsiveContainer 
                width = "45%"
                height = "70%"
            >
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                    >
                    <XAxis
                        dataKey="time"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                        angle={270}
                        position="left"
                        style={{
                            textAnchor: 'middle',
                            fill: theme.palette.text.primary,
                            ...theme.typography.body1,
                        }}
                        >
                        Sales ($)
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="amount"
                        stroke={theme.palette.primary.main}z
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </span>

    </div>
  )
}

export default Statistics;
