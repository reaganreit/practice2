import Header from "../Components/Header";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { margin, width } from "@mui/system";

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
  const theme = useTheme();
  return (
    <div style={{height: "100%"}}>
        <Header title = "Statistics"></Header>

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
                        <td>Gross Revenue</td>
                        <td>$10,000</td>
                    </tr>
                    <tr>
                        <td>Credit</td>
                        <td>$5,000</td>
                    </tr>
                    <tr>
                        <td>Dining</td>
                        <td>$5,000</td>
                    </tr>
                    <tr>
                        <td>Orders</td>
                        <td>1000</td>
                    </tr>
                </table>

                <div className="reportButtonsContainer" style={{
                    marginTop: "15%",
                }}>
                    <Button className = "reportButtons" style ={{backgroundColor:"red", width: "20%", marginLeft: "10%"}} variant = "contained" >POS Report</Button>
                    <Button className = "reportButtons" style ={{backgroundColor:"red", width: "20%", marginLeft: "10%"}} variant = "contained" >Popular Combos</Button>
                    <Button className = "reportButtons" style ={{backgroundColor:"red", width: "20%", marginLeft: "10%"}} variant = "contained" >Excess Report</Button>
                </div>

            </div>

            <ResponsiveContainer 
                width = "45%"
                height = "50%"
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
