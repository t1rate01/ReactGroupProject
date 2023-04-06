package com.climate.group3;
import java.sql.*;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartFrame;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

//connecting to MySQL database

public class visual3 {
    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/web_sovellus";
            String user = "root";
            String password = "Kissakala19!";
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Connection successful!");
            
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT time_one, carb_diox, carb_diox_un FROM 1carbon_dioxide");
            
            XYSeries series = new XYSeries("Carbon Dioxide");
            while(rs.next()) {
                double time = rs.getDouble("time_one");
                double carbDiox = rs.getDouble("carb_diox");
                double carbDioxUn = rs.getDouble("carb_diox_un");
                series.add(time, carbDiox);
                series.add(time, carbDioxUn);
            }
            XYSeriesCollection dataset = new XYSeriesCollection();
            dataset.addSeries(series);
            
            JFreeChart chart = ChartFactory.createXYLineChart("Carbon Dioxide", "Time", "Concentration", dataset, PlotOrientation.VERTICAL, true, true, false);
            ChartFrame frame = new ChartFrame("Chart", chart);
            frame.pack();
            frame.setVisible(true);
            
            con.close();
        } catch (SQLException e) {
            System.out.println("Connection failed.");
            e.printStackTrace();
        }
    }
}