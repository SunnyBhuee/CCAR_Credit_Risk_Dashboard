var parseDate = d3.timeParse("%Y-%m-%d");
const ind_chart_ht = 500;
const ind_chart_wd = 500;

var margin = {top: 50, right: 50, bottom: 50, left: 100};
var width = 1880;
var height = 750;


var firstMacroLeft = 800;
var small_chart_ht = 150;

//---------COLORS-----------
var color_peers = ['#000000','#fffb00','#ff00ff','#1900ff'];
var color_scens = ['#106331', '#ed0000'];

var svg0 = d3.select("#container0").append("svg")
             .attr('class','tempsvh')
             .attr("height",100)
             .attr("width", width);
             
svg0.append('rect')
             .attr('x', 0)
             .attr('y', 0)
             .attr('width', width)
             .attr('height', 90)
             .attr('fill', '#054b23');

svg0.append("text")
             .attr("font-size", "20px")
             .attr("font-family", "Helvetica")
             .attr('font-weight', 'bold')
             .text('Credit Risk')
             .attr("fill", "#ffffff")
            .attr("transform", "translate("+30+","+35+")")
            .attr("class", "left_header1");

svg0.append("text")
            .attr("font-size", "20px")
            .attr("font-family", "Helvetica")
            .attr('font-weight', 'bold')
            .text('Sample Data')
            .attr("fill", "#ffffff")
           .attr("transform", "translate("+20+","+65+")")
           .attr("class", "left_header2");
             
svg0.append("text")
             .attr("font-size", "40px")
             .attr("font-family", "Helvetica")
             .attr('font-weight', 'bold')
             .text('CCAR - Credit Loss Analytics')
             .attr("fill", "#ffffff")
            .attr("transform", "translate("+600+","+45+")")
            .attr("class", "center_header1");

svg0.append("text")
            .attr("font-size", "20px")
            .attr("font-family", "Helvetica")
            .attr('font-weight', 'bold')
            .text('Past - Present - Future')
            .attr("fill", "#ffffff")
           .attr("transform", "translate("+750+","+75+")")
           .attr("class", "center_header2");

var logo_img = svg0.append("svg:image")
           .attr("xlink:href", "lib/Dash_Logo.png")
           .attr("width", 85)
           .attr("height", 85)
           .attr("x", width-90)
           .attr("y",3);


svg0.append("text")
           .attr("font-size", "14px")
           .attr("font-family", "Helvetica")
           .attr('font-weight', 'bold')
           .text('Home')
           .attr("fill", "#ffffff")
          .attr("transform", "translate("+220+","+77+")")
          .attr("class", "nav_btn_txt");
        
svg0.append("a")
           .attr("xlink:href", "CCAR_analytics.html")
           .append("rect")  
           .attr("x", 200)
           .attr("y", 60)
           .attr("height", 25)
           .attr("width", 75)
           .style("opacity", 0.2)
           .style("fill", "lightgreen");

svg0.append("text")
           .attr("font-size", "14px")
           .attr("font-family", "Helvetica")
           .attr('font-weight', 'bold')
           .text('About')
           .attr("fill", "#ffffff")
          .attr("transform", "translate("+320+","+77+")")
          .attr("class", "nav_btn_txt");
        
svg0.append("a")
           .attr("xlink:href", "About.html")
           .append("rect")  
           .attr("x", 300)
           .attr("y", 60)
           .attr("height", 25)
           .attr("width", 75)
           .style("opacity", 0.2)
           .style("fill", "lightgreen");

//------SETTING SVG----------
var svg = d3.select("body").append("svg")
             .attr('class','all_charts')
            .attr("height",height)
            .attr("width", width);

// ----COMMENTS SECTION-----
svg.append("text")
            .text('Instructions:')
           .attr("transform", "translate("+605+","+70+")")
           .attr("fill", "#0c4714")
           .attr("class", "comment1");

svg.append("text")
           .text('- Select your Bank of interest.')
          .attr("transform", "translate("+605+","+90+")")
          .attr("class", "comment2");

svg.append("text")
          .text('- Select your Portfolio of interest.')
         .attr("transform", "translate("+605+","+110+")")
         .attr("class", "comment2");

svg.append("text")
         .text('- All graphs update accordingly.')
        .attr("transform", "translate("+605+","+130+")")
        .attr("class", "comment2");

svg.append("text")
        .text('- Map shows location of selected Bank ')
       .attr("transform", "translate("+605+","+150+")")
       .attr("class", "comment2");

svg.append("text")
       .text('\u00A0\u00A0and its peers for a selected portfolio.')
      .attr("transform", "translate("+607+","+165+")")
      .attr("class", "comment2");
	  
svg.append("text")
            .text('Number of Banks:')
           .attr("transform", "translate("+605+","+210+")")
           .attr("fill", "#0c4714")
           .attr("class", "comment1");
		   
svg.append("text")
        .text('Over 400')
       .attr("transform", "translate("+735+","+210+")")
       .attr("class", "comment2");
		   
svg.append("text")
            .text('Number of Portfolios:')
           .attr("transform", "translate("+605+","+230+")")
           .attr("fill", "#0c4714")
           .attr("class", "comment1");
		   
svg.append("text")
        .text('Over 1600')
       .attr("transform", "translate("+760+","+230+")")
       .attr("class", "comment2");

svg.append("text")
            .text('Models Used:')
           .attr("transform", "translate("+605+","+600+")")
           .attr("fill", "#0c4714")
           .attr("class", "comment1");

svg.append("text")
           .text('- KNN to find Peers.')
          .attr("transform", "translate("+605+","+620+")")
          .attr("class", "comment2");

svg.append("text")
          .text('- Exp. Smoothing to forecast balances.')
         .attr("transform", "translate("+605+","+635+")")
         .attr("class", "comment2");

svg.append("text")
         .text('- Regressions to forecast losses.')
        .attr("transform", "translate("+605+","+650+")")
        .attr("class", "comment2");


svg.append("text")
        .text('Main Data Sources:')
       .attr("transform", "translate("+605+","+700+")")
       .attr("fill", "#0c4714")
       .attr("class", "comment1");

svg.append("text")
       .text('- FFIEC for historical data')
      .attr("transform", "translate("+605+","+720+")")
      .attr("class", "comment2");

svg.append("text")
      .text('- CCAR site for scenarios')
     .attr("transform", "translate("+605+","+735+")")
     .attr("class", "comment2");

svg.append("a")
     .attr("xlink:href", "https://cdr.ffiec.gov/public/ManageFacsimiles.aspx")
     .append("rect")  
     .attr("x", 608)
     .attr("y", 710)
     .attr("height", 10)
     .attr("width", 32)
     .style("opacity", 0.2)
     .style("fill", "lightgreen");

svg.append("a")
     .attr("xlink:href", "https://www.federalreserve.gov/supervisionreg/ccar.htm")
     .append("rect")  
     .attr("x", 608)
     .attr("y", 725)
     .attr("height", 10)
     .attr("width", 32)
     .style("opacity", 0.2)
     .style("fill", "lightgreen");

// -------------------------------------------------------------------------------|

var path = d3.geoPath();
var bank_info_map = d3.map();
var bank_info_map2 = d3.map();

// LINE IDs
let id = 0;
const ids = function () {
    return "line-"+id++;
}  

Promise.all([
    d3.dsv(",", "datasets/forecast_results.csv", function(d){
        return{
            date: parseDate(d.date),
            rssd_id: +d.rssd_id,
            product: d.product,
            chg_b: +d.chg_b,
            chg_s: +d.chg_s,
            rolling9q_b: +d.rolling9q_b,
            rolling9q_s: +d.rolling9q_s
        }
    }),

    d3.dsv(",", "datasets/bank_names_full.csv", function(d){
        return{
            rssd_id: d.rssd_id,
            banks: d.banks,
            city: d.city,
            state: d.state,
            book: d.book,
            losses: d.losses
        }
    }),

    d3.dsv(",", "datasets/hist_data_rolling_9q_loss_rates_with_peers.csv", function(d){
        return{
            date: parseDate(d.date),
            rssd_id: +d.rssd_id,
            product: d.product,
            bank0: +d.bank0,
            bank1: +d.bank1,
            bank2: +d.bank2,
            bank3: +d.bank3
        }
    }),

    d3.dsv(",", "datasets/macro_variables_projections.csv", function(d){
        return{
            date: parseDate(d.Date),
            UR_B: +d.UR_B,
            DJI_B: +d.DJI_B,
            HPI_B: +d.HPI_B,            
            UR_S: +d.UR_S,
            DJI_S: +d.DJI_S,            
            HPI_S: +d.HPI_S
        }
    }),

    d3.dsv(",", "datasets/forecast_with_peers.csv", function(d){
        return{
            date: parseDate(d.date),
            rssd_id: +d.rssd_id,
            product: d.product,
            bank0_b: +d.bank0_b,
            bank0_s: +d.bank0_s,
            bank1_b: +d.bank1_b,
            bank1_s: +d.bank1_s,
            bank2_b: +d.bank2_b,
            bank2_s: +d.bank2_s,
            bank3_b: +d.bank3_b,
            bank3_s: +d.bank3_s
        }
    }),

    d3.json('datasets/USA_3_1.json'),

    d3.dsv(",", "datasets/ccar_peers_geo_data.csv", function(d){
        return{
            rssd_id: +d.rssd_id,
            portfolio: d.portfolio,
            peer: d.Peer,
            state: d.state,
            present: +d.present,
            peer_rssd_id: +d.peer_rssd_id,
			assets: +d.Assets,
            color: d.color,
            size: +d.Size,
            loc_x: +d.loc_x,
            loc_y: +d.loc_y,
            name: d.name
        }
    })

]).then(function(values){
    var forecastData = values[0];

    var unq_banks_info = values[1];

    var historicalData = values[2];

    var forecastMacros = values[3];

    var forecastDataFull = values[4];

    var coords_data = values[5].features;

    var peer_state = values[6];

    // ready(error, world, values[0]);
    ready(unq_banks_info, forecastData, historicalData, forecastMacros, forecastDataFull, coords_data, peer_state);
});


function ready(bank_attr_data, fcast_data, hist_data, fcast_macro, fcast_data_full, usa, peer_loc) {

    // max , min vals
    var hist_date_extent = d3.extent(hist_data, function(d){return d.date;});

    // enter code to extract all unique rssd_ids from fcast_data
    var flags = [], unq_rssd = [], l = bank_attr_data.length, i;
    for( var i=0; i<l; i++) {
        if( flags[bank_attr_data[i].rssd_id]) continue;
        flags[bank_attr_data[i].rssd_id] = true;
        unq_rssd.push(bank_attr_data[i].rssd_id);
    };
    unq_rssd = unq_rssd.sort();

    // enter code to extract all unique bank names from fcast_data
    var flags2 = [], unq_banks = [], l = bank_attr_data.length, i;
    for( var i=0; i<l; i++) {
        if( flags2[bank_attr_data[i].banks]) continue;
        flags2[bank_attr_data[i].rssd_id] = true;
        unq_banks.push(bank_attr_data[i].banks);
    };
    unq_banks = unq_banks.sort();

    // enter code to extract all unique RSSD IDs from forecastData
    var flags2 = [], unq_prods = [], l = fcast_data.length, i;
    for( var i=0; i<l; i++) {
        if( flags2[fcast_data[i].product]) continue;
        flags2[fcast_data[i].product] = true;
        unq_prods.push(fcast_data[i].product);
    };
    unq_prods = unq_prods.sort();

    //----------------------------------------------------------
    //-----------------MAPPING BANK NAMES TO RSSD---------------
    for (var k=0; k<bank_attr_data.length;k++){
        bank_info_map.set(bank_attr_data[k].banks, +bank_attr_data[k].rssd_id);  
    };

    for (var k=0; k<bank_attr_data.length;k++){
        bank_info_map2.set(+bank_attr_data[k].rssd_id, bank_attr_data[k].banks);  
    };

    //-------------------------------------------
    // DROPDOWN FOR BANKS
    var new_bank = bank_attr_data[0].banks;
    var new_prod = "Credit Cards";

    // enter code to append the rssd_id options to the dropdown
    var dropdown_banks_Change = function() {
        new_bank = d3.select(this).property('value')
        h_remover();
        r_remover();
        p_remover();
        c_remover();
        // createMapAndLegend(world, fcast_data, new_bank, unq_prods);
        createHistLossRateChart(hist_data, new_bank, hist_date_extent, peer_loc, new_prod);
        createUSMap(new_bank, usa, peer_loc, new_prod);
        createBankResultChart(new_bank,firstResultsLeft,fcast_date_extent,small_chart_ht,fcast_data,firstResultsTop, secondResultsLeft, secondResultsTop, new_prod);
        createPeerResultChart(new_bank, firstPeerLeft, fcast_date_extent, small_chart_ht, fcast_data_full, firstPeerTop, secondPeerLeft, secondPeerTop, new_prod);
    };

    const padd1 = d3.select("#container")
                     .append("text")
                     .text('\u00A0\u00A0\u00A0\u00A0\u00A0')
                     .attr("class", "pad1");

    const text_1 = d3.select("#container")
                     .append("text")
                     .text("Select Bank: ")
                     .attr("class", "text_dd_1");

    var dropdown_banks = d3.select("#container")
                .insert("select", "svg")
                .attr('class','banks_dropdown');
                
    // event listener for the dropdown_banks. Update choropleth and legend when selection changes. Call createMapAndLegend() with required arguments.
    dropdown_banks.on("change", dropdown_banks_Change);

    dropdown_banks.selectAll("option")
                .attr("class","bank_dd")
                .data(unq_banks)
                .enter().append("option")
                .attr("value", function (d) { return d; })
                .text(function (d) {
                    return d;
                });

    //--------------------------------------------------------
    // DROPDOWN FOR PRODUCTS
    // enter code to append the rssd_id options to the dropdown
    var dropdown_prod_Change = function() {
        new_prod = d3.select(this).property('value')
        h_remover();
        r_remover();
        p_remover();
        c_remover();
        createHistLossRateChart(hist_data, new_bank, hist_date_extent, peer_loc, new_prod);
        createUSMap(new_bank, usa, peer_loc, new_prod);
        createBankResultChart(new_bank,firstResultsLeft,fcast_date_extent,small_chart_ht,fcast_data,firstResultsTop, secondResultsLeft, secondResultsTop, new_prod);
        createPeerResultChart(new_bank, firstPeerLeft, fcast_date_extent, small_chart_ht, fcast_data_full, firstPeerTop, secondPeerLeft, secondPeerTop, new_prod);
    };

    const padd2 = d3.select("#container")
                     .append("text")
                     .text('\u00A0\u00A0\u00A0\u00A0\u00A0')
                     .attr("class", "pad2");

    const text_2 = d3.select("#container")
                     .append("text")
                     .text("Select Product: ")
                     .attr("class", "text_dd_2");

    var dropdown_prod = d3.select("#container")
                .insert("select", "svg")
                .attr('class','prod_dropdown');
                
    // event listener for the dropdown_prod. Update choropleth and legend when selection changes. Call createMapAndLegend() with required arguments.
    dropdown_prod.on("change", dropdown_prod_Change);

    dropdown_prod.selectAll("option")
                .data(unq_prods)
                .enter().append("option")
                .attr("value", function (d) { return d; })
                .text(function (d) {
                    return d;
                });

    //---------------HISTORICAL CHART-----------------------|
    //---------------------CHART 1--------------------------|
    // Settign title of the chart
    svg.append("text")
                .attr("transform", "translate("+160+","+50+")")
                .attr("font-size", "18px")
                .attr("font-family", "Helvetica")
                .attr('font-weight', 'bold')
                .text("Historical 9Q Rolling Loss Rates (bps)") 
                
                
    // Add the text label for Y axis
    svg.append("text")
        .attr('id','y_axis_label1')
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("font-size", "12px")
        .attr("font-family", "Helvetica")
        .attr("x", -150)
        .attr("y", -margin.left+150)
        .text("Loss Rate (bps)");

    // default - shows first bank in list
    createHistLossRateChart(hist_data, new_bank, hist_date_extent, peer_loc, new_prod);

    //---------------------------LEGEND-----------------------|
    svg.append('circle')
        .attr('class','peer_legend')
        .attr("cx", "85")
        .attr("cy", "385")
        .attr("r", "5")
        .attr("fill", color_peers[0]);
        
    svg.append('circle')
        .attr('class','scen_legend')
        .attr("cx", "210")
        .attr("cy", "385")
        .attr("r", "5")
        .attr("fill", color_peers[1]);      

    svg.append('circle')
        .attr('class','scen_legend')
        .attr("cx", "335")
        .attr("cy", "385")
        .attr("r", "5")
        .attr("fill", color_peers[2]);

    svg.append('circle')
        .attr('class','scen_legend')
        .attr("cx", "460")
        .attr("cy", "385")
        .attr("r", "5")
        .attr("fill", color_peers[3]);
            
    //------------------------------------------------------|
    //-------------------CHOROPLETH-------------------------|
    //------------------------------------------------------|
    // default - shows first bank in list    
    createUSMap(bank_attr_data[0].banks, usa, peer_loc, new_prod);

    //------------------MACRO CHARTS------------------------|
    svg.append("text")
                .attr("transform", "translate("+(1200)+","+10+")")
                .attr("font-size", "14px")
                .attr("font-family", "Helvetica")
                .attr("fill", "#0c4714")
                .attr('font-weight', 'bold')
                .text("Macroeconomic Variables from CCAR")  

    var slices = fcast_macro.columns.slice(1).map(function(id){
        return {
            id: id.split("_")[1],
            values: fcast_macro.map(function(d){
                            if (id.split("_")[0] == 'UR') {
                                return {date: d.date,
                                        UR: +d[id]}
                            }
                            else if (id.split("_")[0] == 'DJI') {
                                return {date: d.date,
                                        DJI: +d[id]}
                            }
                            else{
                                return {date: d.date,
                                        HPI: +d[id]}
                            }                                                        
            })
        };
    });

    final_macro_fcast = []
    var colm_id = 0;
    for (var a1 =0; a1<slices.length; a1+=3){
        let da = []
        for (var a2 =0; a2<slices[colm_id].values.length; a2++){
            da[a2] = {
            ...slices[a1].values[a2],
            ...slices[a1+1].values[a2],
            ...slices[a1+2].values[a2]
        };
        }
        temp = {
            id: slices[a1].id,
            values: da
        }
        final_macro_fcast[colm_id] = temp
        colm_id++;
    }

    //---------------------------LEGEND-----------------------|
    svg.append('circle')
        .attr('class','scen_legend1')
        .attr("cx", "1600")
        .attr("cy", "5")
        .attr("r", "5")
        .attr("fill", color_scens[0]);

    svg.append('circle')
        .attr('class','scen_legend')
        .attr("cx", "1600")
        .attr("cy", "20")
        .attr("r", "5")
        .attr("fill", color_scens[1]);

    svg.append("text")
        .attr("transform", "translate("+(1610)+","+10+")")
        .attr("font-size", "12px")
        .attr("font-family", "Helvetica")
        .attr("fill", "#0c4714")
        .attr('font-weight', 'bold')
        .text("Base Scenario")  

    svg.append("text")
        .attr("transform", "translate("+(1610)+","+25+")")
        .attr("font-size", "12px")
        .attr("font-family", "Helvetica")
        .attr("fill", "#0c4714")
        .attr('font-weight', 'bold')
        .text("Severe Scenario")  
    //--------------------------------------------------------|
    for (var j = 0; j < final_macro_fcast.length; j++) {
        final_macro_fcast[j]['color'] = color_scens[j];
    }

    // max , min vals
    var fcast_date_extent = d3.extent(fcast_macro, function(d){return d.date;});

    var ur_max = d3.max(final_macro_fcast, function(c){
        return d3.max(c.values, function(d){
            return d.UR;});
        });

    var dji_max = d3.max(final_macro_fcast, function(c){
        return d3.max(c.values, function(d){
            return d.DJI;});
        });

    var hpi_max = d3.max(final_macro_fcast, function(c){
        return d3.max(c.values, function(d){
            return d.HPI;});
        });
    
    //---------------------CHART 2--------------------------|
    //---------------------SCALES---------------------------|
    var xScale2 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([firstMacroLeft, firstMacroLeft+250]); 

    var yScale2 = d3.scaleLinear()
                    .domain([0, ur_max]) 
                    .range([small_chart_ht+30, 30]); 

    // //-----------------------AXES---------------------------|
    const yaxis2 = d3.axisLeft()
                     .scale(yScale2);

    const xaxis2 = d3.axisBottom()
                     .ticks(d3.timeMonth.every(6))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale2);

    // creating a line generator - it generates x-y coords
    var line_gen2 = d3.line()
                      .x(function(d) {return xScale2(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale2(d.UR); }); // set the y values for the line generator 

    var chartGroup_2 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + (margin.top -10)+ ")");

    // Settign title of the chart
    chartGroup_2.append("text")
                .attr("transform", "translate("+(firstMacroLeft+50)+","+15+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr('font-weight', 'bold')
                .text("US Unemployment Rate %")  

    // Add the X Axis
    chartGroup_2.append("g")
                .attr("class", "x axis2")
                .attr("transform", "translate(0," + (small_chart_ht+30) + ")")
                .call(xaxis2);

    // Add the Y Axis
    chartGroup_2.append("g")
                .attr("class", "y axis 2")
                .attr("transform", "translate(" + firstMacroLeft + ",0)")
                .call(yaxis2);

    // Add Lines
    const lines_chart2 = chartGroup_2.selectAll("lines")
                                      .data(final_macro_fcast)
                                      .enter().append("g")

    lines_chart2.append("path")
                .attr("class",ids)
                .attr("d",function(d){
                    return line_gen2(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);

    //-----CIRCLES
    const circle_chart2 = chartGroup_2.selectAll(".e1_dot")
                                        .data(final_macro_fcast)
                                        .enter().append("g")
                                        .attr('fill',function(d){
                                            return d.color;
                                        });

    function e1_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
                .attr('x', function() { return xScale2(dd.date) + 75; })
                .attr('y', function() { return yScale2(dd.UR) + 75; })
                .attr('id', 'e1_tooltip')
                .text('Unemp: '+ Math.round(dd.UR*100)/100 + "%");

    };

    function e1_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#e1_tooltip").remove();
    };
    
    circle_chart2.append('g').selectAll("circle")
                 .data(function(d){
                                return d.values;
                            })
                 .enter().append("circle") 
                         .attr("class", "e1_dot")
                         .attr("r", function(dd){
                             if ([5,11].indexOf(dd.date.getMonth())>=0){
                                 return 5;}
                         })
                         .attr("cx", function(dd) {
                             return xScale2(dd.date); })
                         .attr("cy", function(dd) {
                             return yScale2(dd.UR);})
                         .on("mouseover",e1_MouseOver)
                         .on("mouseout",e1_MouseOut);

    //---------------------CHART 3--------------------------|
    var secondMacroLeft = firstMacroLeft + 350;

    //---------------------SCALES---------------------------|
    var xScale3 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([secondMacroLeft, secondMacroLeft+250]); 

    var yScale3 = d3.scaleLinear()
                    .domain([0, dji_max]) 
                    .range([small_chart_ht+30, 30]); 

    // //-----------------------AXES---------------------------|
    const yaxis3 = d3.axisLeft()
                     .scale(yScale3);

    const xaxis3 = d3.axisBottom()
                     .ticks(d3.timeMonth.every(6))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale3);

    // creating a line generator - it generates x-y coords
    var line_gen3 = d3.line()
                      .x(function(d) {return xScale3(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale3(d.DJI); }); // set the y values for the line generator 

    var chartGroup_3 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + (margin.top -10) + ")");

    // Settign title of the chart
    chartGroup_3.append("text")
                .attr("transform", "translate("+(secondMacroLeft+50)+","+15+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr('font-weight', 'bold')
                .text("Stock Market - Dow Jones Index")  

    // Add the X Axis
    chartGroup_3.append("g")
                .attr("class", "x axis3")
                .attr("transform", "translate(0," + (small_chart_ht+30) + ")")
                .call(xaxis3);

    // Add the Y Axis
    chartGroup_3.append("g")
                .attr("class", "y axis 3")
                .attr("transform", "translate("+secondMacroLeft+",0)")
                .call(yaxis3);

    // Add Lines
    const lines_chart3 = chartGroup_3.selectAll("lines")
                                      .data(final_macro_fcast)
                                      .enter().append("g")

    lines_chart3.append("path")
                .attr("class",ids)
                .attr("d",function(d){
                    return line_gen3(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);
    
    //-----CIRCLES
    const circle_chart3 = chartGroup_3.selectAll(".e2_dot")
                                    .data(final_macro_fcast)
                                    .enter().append("g")
                                    .attr('fill',function(d){
                                        return d.color;
                                    });
    
    function e2_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
                .attr('x', function() { return xScale3(dd.date) + 75; })
                .attr('y', function() { return yScale3(dd.DJI) + 75; })
                .attr('id', 'e2_tooltip')
                .text('Dow Jones: '+ Math.round(dd.DJI).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    };

    function e2_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#e2_tooltip").remove();
    };

    circle_chart3.append('g').selectAll("circle")
                 .data(function(d){
                                return d.values;
                            })
                 .enter().append("circle") 
                         .attr("class", "e2_dot")
                         .attr("r", function(dd){
                             if ([5,11].indexOf(dd.date.getMonth())>=0){
                                 return 5;}
                         })
                         .attr("cx", function(dd) {
                             return xScale3(dd.date); })
                         .attr("cy", function(dd) {
                             return yScale3(dd.DJI);})
                         .on("mouseover",e2_MouseOver)
                         .on("mouseout",e2_MouseOut);

    //---------------------CHART 4--------------------------|
    var thirdMacroLeft = secondMacroLeft + 350;

    //---------------------SCALES---------------------------|
    var xScale4 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([thirdMacroLeft, thirdMacroLeft+250]); 

    var yScale4 = d3.scaleLinear()
                    .domain([0, hpi_max]) 
                    .range([small_chart_ht+30, 30]); 

    //-----------------------AXES---------------------------|
    const yaxis4 = d3.axisLeft()
                     .scale(yScale4);

    const xaxis4 = d3.axisBottom()
                     .ticks(d3.timeMonth.every(6))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale4);

    // creating a line generator - it generates x-y coords
    var line_gen4 = d3.line()
                      .x(function(d) {return xScale4(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale4(d.HPI); }); // set the y values for the line generator 

    var chartGroup_4 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + (margin.top -10) + ")");

    // Settign title of the chart
    chartGroup_4.append("text")
                .attr("transform", "translate("+(thirdMacroLeft+47)+","+15+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr('font-weight', 'bold')
                .text("US House Price Index (HPI)")  

    // Add the X Axis
    chartGroup_4.append("g")
                .attr("class", "x axis4")
                .attr("transform", "translate(0," + (small_chart_ht+30) + ")")
                .call(xaxis4);

    // Add the Y Axis
    chartGroup_4.append("g")
                .attr("class", "y axis 4")
                .attr("transform", "translate("+thirdMacroLeft+",0)")
                .call(yaxis4);

    // Add Lines
    const lines_chart4 = chartGroup_4.selectAll("lines")
                                      .data(final_macro_fcast)
                                      .enter().append("g")

    lines_chart4.append("path")
                .attr("class",ids)
                .attr("d",function(d){
                    return line_gen4(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);

    //-----CIRCLES
    const circle_chart4 = chartGroup_4.selectAll(".e3_dot")
                                        .data(final_macro_fcast)
                                        .enter().append("g")
                                        .attr('fill',function(d){
                                            return d.color;
                                        });

    function e3_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
            .attr('x', function() { return xScale4(dd.date) + 75; })
            .attr('y', function() { return yScale4(dd.HPI) + 75; })
            .attr('id', 'e3_tooltip')
            .text('HPI: '+ Math.round(dd.HPI));

    };

    function e3_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#e3_tooltip").remove();
        };

    circle_chart4.append('g').selectAll("circle")
                    .data(function(d){
                        return d.values;
                    })
                    .enter().append("circle") 
                        .attr("class", "e3_dot")
                        .attr("r", function(dd){
                    if ([5,11].indexOf(dd.date.getMonth())>=0){
                            return 5;}
                        })
                    .attr("cx", function(dd) {
                        return xScale4(dd.date); })
                    .attr("cy", function(dd) {
                        return yScale4(dd.HPI);})
                    .on("mouseover",e3_MouseOver)
                    .on("mouseout",e3_MouseOut);

    //------------------BANK RESULTS------------------------|
    svg.append("text")
        .attr("transform", "translate("+(1200)+","+(small_chart_ht+small_chart_ht-25)+")")
        .attr("font-size", "14px")
        .attr("font-family", "Helvetica")
        .attr("fill", "#0c4714")
        .attr('font-weight', 'bold')
        .text("Selected Bank's performance under CCAR") 

    //---------------------CHART 5--------------------------|
    var firstResultsLeft = firstMacroLeft;
    var firstResultsTop = 400;

    // Settign title of the chart
    svg.append("text")
        .attr("transform", "translate("+(firstResultsLeft+200)+","+(firstResultsTop-small_chart_ht+50)+")")
        .attr("font-size", "12px")
        .attr("font-family", "Helvetica")
        .attr('font-weight', 'bold')
        .text("Chargeoffs (Losses in thousands) $") 

    //---------------------CHART 6--------------------------|
    var secondResultsLeft = firstMacroLeft+550;
    var secondResultsTop = 400;

    // Settign title of the chart
    svg.append("text")
        .attr("transform", "translate("+(secondResultsLeft+225)+","+(secondResultsTop-small_chart_ht+50)+")")
        .attr("font-size", "12px")
        .attr("font-size", "12px")
        .attr("font-family", "Helvetica")
        .attr('font-weight', 'bold')
        .text("9 Quarter Rolling Loss Rate (Bps)") 
    
    // default - shows first bank in list
    createBankResultChart(bank_info_map2.get(fcast_data[0].rssd_id),firstResultsLeft,fcast_date_extent,small_chart_ht,fcast_data,firstResultsTop, secondResultsLeft, secondResultsTop, new_prod);

    //------------------PEER RESULTS------------------------|
    svg.append("text")
                .attr("transform", "translate("+(1200)+","+525+")")
                .attr("font-size", "14px")
                .attr("font-family", "Helvetica")
                .attr("fill", "#0c4714")
                .attr('font-weight', 'bold')
                .text("Peer Banks' performance under CCAR") 

    //---------------------CHART 7--------------------------|
    var firstPeerLeft = firstMacroLeft;
    var firstPeerTop = 675;

    // Settign title of the chart
    svg.append("text")
                .attr("transform", "translate("+(firstPeerLeft+175)+","+(firstPeerTop-small_chart_ht+30)+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr('font-weight', 'bold')
                .text("Base Scenario - Loss Rates (Bps)");

    //---------------------CHART 8--------------------------|
    var secondPeerLeft = secondResultsLeft;
    var secondPeerTop = firstPeerTop;

    // Settign title of the chart
    svg.append("text")
                .attr("transform", "translate("+(secondPeerLeft+185)+","+(secondPeerTop-small_chart_ht+30)+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr('font-weight', 'bold')
                .text("Severe Scenario - Loss Rates (Bps)");

    // default - shows first bank in list
    createPeerResultChart(bank_info_map2.get(fcast_data_full[0].rssd_id), firstPeerLeft, fcast_date_extent, small_chart_ht, fcast_data_full, firstPeerTop, secondPeerLeft, secondPeerTop, new_prod);
};

// MAIN HISTORICAL CHART
function createHistLossRateChart(hist_data, bank_nm, hist_date_extent, peer_info, prod_nm){

    var selected_bank_rssd = bank_info_map.get(bank_nm);
    var used_data0 = hist_data.filter(e => e.rssd_id==selected_bank_rssd)
    var used_data = used_data0.filter(e => e.product == prod_nm)

    var used_peer_loc0 = peer_info.filter(e => e.rssd_id==selected_bank_rssd)
    var used_peer_loc = used_peer_loc0.filter(e => e.portfolio==prod_nm)

    // LINE IDs
    let h_id = 0;
    const h_ids = function () {
        return "line-"+h_id++;
    }  

    const keep0 = ['date','bank0','bank1','bank2','bank3'];

    const used_data_subset2 = used_data.map(row => ['type', ...keep0].reduce((acc, v) => ({ ...acc, [v]: row[v] }), {}));

    used_data_subset2['columns'] = keep0;

    var slices0 = used_data_subset2.columns.slice(1).map(function(id){
        return {
            id: id,
            values: used_data_subset2.map(function(d){
                            return {date: d.date,
                                    hist: +d[id]}
                            }
            )
        };
    });
    
    final_hist = []
    var colm_id = 0;
    for (var a1 =0; a1<slices0.length; a1++){
        let da = []
        for (var a2 =0; a2<slices0[colm_id].values.length; a2++){
            da[a2] = {
            ...slices0[a1].values[a2]
        };
        }
        temp = {
            id: slices0[a1].id,
            values: da
        }
        final_hist[colm_id] = temp
        colm_id++;
    }

    //-------------------------COLORS-------------------------|
    for (var j = 0; j < 4; j++) {
        final_hist[j]['color'] = color_peers[j];
    }

    var firstLeft = 0;
    var firstHt = 300;

    // max , min vals
    var hist_loss_max = d3.max(final_hist, function(c){
        return d3.max(c.values, function(d){
            return d.hist;});
        });

    //---------------------SCALES---------------------------|
    var xScale1 = d3.scaleTime()
                    .domain(hist_date_extent) 
                    .range([firstLeft, firstLeft+500]); 

    var yScale1 = d3.scaleLinear()
                    .domain([0, hist_loss_max]) 
                    .range([firstHt, firstHt-285]); 

    // //-----------------------AXES---------------------------|
    const yaxis1 = d3.axisLeft()
                     .scale(yScale1);

    const xaxis1 = d3.axisBottom()
                     .ticks(d3.timeYear.every(2))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale1);

    // creating a line generator - it generates x-y coords
    var line_gen1 = d3.line()
                      .x(function(d) {return xScale1(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale1(d.hist); }); // set the y values for the line generator 

    var chartGroup_1 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add the X Axis
    chartGroup_1.append("g")
                .attr("class", "xaxis1")
                .attr("transform", "translate(0," + (firstHt) + ")")
                .call(xaxis1);

    // Add the Y Axis
    chartGroup_1.append("g")
                .attr("class", "yaxis1")
                .call(yaxis1);

    // Add Lines
    const lines_chart1 = chartGroup_1.selectAll("lines")
                                      .data(final_hist)
                                      .enter().append("g")

    lines_chart1.append("path")
                .attr("class",'h_ids')
                .attr("d",function(d){
                    return line_gen1(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);

    //-----CIRCLES
    const circle_chart1 = chartGroup_1.selectAll(".h_dot")
                                        .data(final_hist)
                                        .enter().append("g")
                                        .attr('fill',function(d){
                                            return d.color;
                                        });

    function h_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
                .attr('x', function() { return xScale1(dd.date) - 50; })
                .attr('y', function() { return yScale1(dd.hist) + 45; })
                .attr('id', 'h_tooltip')
                .text('Loss Rate: '+ Math.round(dd.hist*10)/10+' Bps');

    };

    function h_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#h_tooltip").remove();
    };

    circle_chart1.append('g').selectAll("circle")
                 .data(function(d){
                                return d.values;
                            })
                 .enter().append("circle") 
                         .attr("class", "h_dot")
                         .attr("r", function(dd){
                             if ([11].indexOf(dd.date.getMonth())>=0){
                                 return 5;}
                         })
                         .attr("cx", function(dd) {
                             return xScale1(dd.date); })
                         .attr("cy", function(dd) {
                             return yScale1(dd.hist);})
                         .on("mouseover",h_MouseOver)
                         .on("mouseout",h_MouseOut);

    //--------LEGEND
    var show_length = 14;
    svg.append("text")
                .attr("transform", "translate("+(95)+","+390+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr("fill", "#0c4714")
                .attr('font-weight', 'bold')
                .attr("class", "main_bank_nm")
                .text(bank_nm.substring(0, show_length))

    var peer1_nm = bank_info_map2.get(used_peer_loc.filter(e => e.peer == 'bank1')[0].peer_rssd_id);
    var peer2_nm = bank_info_map2.get(used_peer_loc.filter(e => e.peer == 'bank2')[0].peer_rssd_id);
    var peer3_nm = bank_info_map2.get(used_peer_loc.filter(e => e.peer == 'bank3')[0].peer_rssd_id);

    svg.append("text")
                .attr("transform", "translate("+(217)+","+390+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr("fill", "#0c4714")
                .attr("class", "peer1_nm")
                .attr('font-weight', 'bold')
                .text(peer1_nm.substring(0, show_length))

    svg.append("text")
                .attr("transform", "translate("+(342)+","+390+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr("fill", "#0c4714")
                .attr("class", "peer2_nm")
                .attr('font-weight', 'bold')
                .text(peer2_nm.substring(0, show_length)) 
    
    svg.append("text")
                .attr("transform", "translate("+(467)+","+390+")")
                .attr("font-size", "12px")
                .attr("font-family", "Helvetica")
                .attr("fill", "#0c4714")
                .attr("class", "peer3_nm")
                .attr('font-weight', 'bold')
                .text(peer3_nm.substring(0, show_length)) 
};


function h_remover(){
    d3.selectAll(".h_ids").remove();
    d3.selectAll(".xaxis1").remove();
    d3.selectAll(".yaxis1").remove();
    d3.selectAll(".main_bank_nm").remove();
    d3.selectAll(".peer1_nm").remove();
    d3.selectAll(".peer2_nm").remove();
    d3.selectAll(".peer3_nm").remove();
    d3.selectAll(".h_dot").remove();
};




function createBankResultChart(bank_nm, firstResultsLeft, fcast_date_extent,small_chart_ht, fcast_data,firstResultsTop, secondResultsLeft, secondResultsTop, prod_nm){

    var selected_bank_rssd = bank_info_map.get(bank_nm);
    var used_data0 = fcast_data.filter(e => e.rssd_id==selected_bank_rssd)
    var used_data = used_data0.filter(e => e.product == prod_nm)

    const keep = ['date', 'chg_b', 'rolling9q_b', 'chg_s', 'rolling9q_s'];

    const fcast_data_subset2 = used_data.map(row => ['type', ...keep].reduce((acc, v) => ({ ...acc, [v]: row[v] }), {}));

    fcast_data_subset2['columns'] = keep;

    var slices2 = fcast_data_subset2.columns.slice(1).map(function(id){
        return {
            id: id.split("_")[1],
            values: fcast_data_subset2.map(function(d){
                            if (id.split("_")[0] == 'chg') {
                                return {date: d.date,
                                        chg: +d[id]}
                            }
                            else {
                                return {date: d.date,
                                        rolling9q: +d[id]}
                            }                                                  
            })
        };
    });

    final_bank_fcast = []
    var colm_id2 = 0;
    for (var a1 =0; a1<slices2.length; a1+=2){
        let da = []
        for (var a2 =0; a2<slices2[colm_id2].values.length; a2++){
            da[a2] = {
            ...slices2[a1].values[a2],
            ...slices2[a1+1].values[a2]        
        };
        }
        temp = {
            id: slices2[a1].id,
            values: da
        }
        final_bank_fcast[colm_id2] = temp
        colm_id2++;
    }

    //-------------------------COLORS-------------------------|
    for (var j = 0; j < final_bank_fcast.length; j++) {
        final_bank_fcast[j]['color'] = color_scens[j];
    }
        
    var loss_max = d3.max(final_bank_fcast, function(c){
        return d3.max(c.values, function(d){
            return d.chg;});
        });

    //---------------------SCALES---------------------------|
    var xScale5 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([firstResultsLeft, firstResultsLeft+400]); 

    var yScale5 = d3.scaleLinear()
                    .domain([0, loss_max]) 
                    .range([firstResultsTop+15, firstResultsTop-small_chart_ht+15]); 

    // //-----------------------AXES---------------------------|
    const yaxis5 = d3.axisLeft()
                     .scale(yScale5);

    const xaxis5 = d3.axisBottom()
                     .ticks(d3.timeMonth.every(6))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale5);

    // creating a line generator - it generates x-y coords
    var line_gen5 = d3.line()
                      .x(function(d) {return xScale5(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale5(d.chg); }); // set the y values for the line generator 

    var chartGroup_5 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    // Add the X Axis
    chartGroup_5.append("g")
                .attr("class", "xaxis5")
                .attr("transform", "translate(0," + (firstResultsTop+15) + ")")
                .call(xaxis5);

    // Add the Y Axis
    chartGroup_5.append("g")
                .attr("class", "yaxis5")
                .attr("transform", "translate(" + firstResultsLeft + ",0)")
                .call(yaxis5);

    // Add Lines
    const lines_chart5 = chartGroup_5.selectAll("lines")
                                      .data(final_bank_fcast)
                                      .enter().append("g")

    lines_chart5.append("path")
                .attr("class",'r_ids')
                .attr("d",function(d){
                    return line_gen5(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);

    //-----CIRCLES
    const circle_chart5 = chartGroup_5.selectAll(".r1_dot")
                                        .data(final_bank_fcast)
                                        .enter().append("g")
                                        .attr('fill',function(d){
                                            return d.color;
                                        });

    function r1_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
            .attr('x', function() { return xScale5(dd.date) + 75; })
            .attr('y', function() { return yScale5(dd.chg) + 75; })
            .attr('id', 'r1_tooltip')
            .text('Loss: $'+ Math.round(dd.chg).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'K');
    };

    function r1_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#r1_tooltip").remove();
    };

    circle_chart5.append('g').selectAll("circle")
                .data(function(d){
                    return d.values;
                    })
                .enter().append("circle") 
                .attr("class", "r1_dot")
                .attr("r", function(dd){
                    if ([5,11].indexOf(dd.date.getMonth())>=0){
                        return 5;}
                    })
                .attr("cx", function(dd) {
                    return xScale5(dd.date); })
                .attr("cy", function(dd) {
                    return yScale5(dd.chg);})
                .on("mouseover",r1_MouseOver)
                .on("mouseout",r1_MouseOut);

    //------------------9 Q Rolling Loss Rates Chart - Fcast------------------------|
    var loss_rate_max = d3.max(final_bank_fcast, function(c){
        return d3.max(c.values, function(d){
            return d.rolling9q;});
        });

    //---------------------SCALES---------------------------|
    var xScale6 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([secondResultsLeft, secondResultsLeft+400]); 

    var yScale6 = d3.scaleLinear()
                    .domain([0, loss_rate_max]) 
                    .range([secondResultsTop+15, secondResultsTop-small_chart_ht+15]); 

    // //-----------------------AXES---------------------------|
    const yaxis6 = d3.axisLeft()
                    .scale(yScale6);

    const xaxis6 = d3.axisBottom()
                    .ticks(d3.timeMonth.every(6))
                    .tickFormat(d3.timeFormat("%b %y"))
                    .scale(xScale6);

    // creating a line generator - it generates x-y coords
    var line_gen6 = d3.line()
                    .x(function(d) {return xScale6(d.date); }) // set the x values for the line generator
                    .y(function(d) {return yScale6(d.rolling9q); }); // set the y values for the line generator 

    var chartGroup_6 = svg.append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add the X Axis
    chartGroup_6.append("g")
                .attr("class", "xaxis6")
                .attr("transform", "translate(0," + (secondResultsTop+15) + ")")
                .call(xaxis6);

    // Add the Y Axis
    chartGroup_6.append("g")
                .attr("class", "yaxis6")
                .attr("transform", "translate(" + secondResultsLeft + ",0)")
                .call(yaxis6);

    // Add Lines
    const lines_chart6 = chartGroup_6.selectAll("lines")
                                    .data(final_bank_fcast)
                                    .enter().append("g")

    lines_chart6.append("path")
                .attr("class",'r9q_ids')
                .attr("d",function(d){
                    return line_gen6(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);
        
    //-----CIRCLES
    const circle_chart6 = chartGroup_6.selectAll(".r2_dot")
                                      .data(final_bank_fcast)
                                      .enter().append("g")
                                      .attr('fill',function(d){
                                          return d.color;
                                      });

    function r2_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
            .attr('x', function() { return xScale6(dd.date) + 30; })
            .attr('y', function() { return yScale6(dd.rolling9q) + 35; })
            .attr('id', 'r2_tooltip')
            .text('Loss Rate: '+ Math.round(dd.rolling9q).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'Bps');
    };

    function r2_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#r2_tooltip").remove();
    };

    circle_chart6.append('g').selectAll("circle")
                    .data(function(d){
                        return d.values;
                    })
                    .enter().append("circle") 
                    .attr("class", "r2_dot")
                    .attr("r", function(dd){
                        if ([5,11].indexOf(dd.date.getMonth())>=0){
                            return 5;}
                        })
                    .attr("cx", function(dd) {
                        return xScale6(dd.date); })
                    .attr("cy", function(dd) {
                        return yScale6(dd.rolling9q);})
                    .on("mouseover",r2_MouseOver)
                    .on("mouseout",r2_MouseOut);
};

function r_remover(){
    d3.selectAll(".r9q_ids").remove();
    d3.selectAll(".r_ids").remove();
    d3.selectAll(".xaxis5").remove();
    d3.selectAll(".yaxis5").remove();
    d3.selectAll(".xaxis6").remove();
    d3.selectAll(".yaxis6").remove();
    d3.selectAll(".r1_dot").remove();
    d3.selectAll(".r2_dot").remove();   
};


function createPeerResultChart(bank_nm, firstPeerLeft, fcast_date_extent, small_chart_ht, fcast_data_full, firstPeerTop, secondPeerLeft, secondPeerTop, prod_nm){
    
    var selected_bank_rssd = bank_info_map.get(bank_nm);
    var used_data0 = fcast_data_full.filter(e => e.rssd_id==selected_bank_rssd)
    var used_data = used_data0.filter(e => e.product == prod_nm)

    const keep1 = ['date','bank0_b','bank0_s', 'bank1_b', 'bank1_s', 'bank2_b', 'bank2_s', 'bank3_b', 'bank3_s'];
    
    const fcast_data_full_subset2 = used_data.map(row => ['type', ...keep1].reduce((acc, v) => ({ ...acc, [v]: row[v] }), {}));

    fcast_data_full_subset2['columns'] = keep1;

    var slices3 = fcast_data_full_subset2.columns.slice(1).map(function(id){
        return {
            id: id.split("_")[0],
            values: fcast_data_full_subset2.map(function(d){
                            if (id.split("_")[1] == 's') {
                                return {date: d.date,
                                        sev: +d[id]}
                            }
                            else {
                                return {date: d.date,
                                        base: +d[id]}
                            }                                                  
            })
        };
    });

    final_bank_fcast_full = []
    var colm_id2 = 0;
    for (var a1 =0; a1<slices3.length; a1+=2){
        let da = []
        for (var a2 =0; a2<slices3[colm_id2].values.length; a2++){
            da[a2] = {
            ...slices3[a1].values[a2],
            ...slices3[a1+1].values[a2]        
        };
        }
        temp = {
            id: slices3[a1].id,
            values: da
        }
        final_bank_fcast_full[colm_id2] = temp
        colm_id2++;
    }

    for (var j = 0; j < 4; j++) {
        final_bank_fcast_full[j]['color'] = color_peers[j];
    }
    
    var loss_max_full_base = d3.max(final_bank_fcast_full, function(c){
        return d3.max(c.values, function(d){
            return d.base;});
        });

    var loss_max_full_sev = d3.max(final_bank_fcast_full, function(c){
        return d3.max(c.values, function(d){
            return d.sev;});
        });

    //---------------------CHART 7--------------------------|
    //---------------------SCALES---------------------------|
    var xScale7 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([firstPeerLeft, firstPeerLeft+400]); 

    var yScale7 = d3.scaleLinear()
                    .domain([0, loss_max_full_base]) 
                    .range([firstPeerTop, firstPeerTop-small_chart_ht]); 

    // //-----------------------AXES---------------------------|
    const yaxis7 = d3.axisLeft()
                     .scale(yScale7);

    const xaxis7 = d3.axisBottom()
                     .ticks(d3.timeMonth.every(6))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale7);

    // creating a line generator - it generates x-y coords
    var line_gen7 = d3.line()
                      .x(function(d) {return xScale7(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale7(d.base); }); // set the y values for the line generator 

    var chartGroup_7 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    // Add the X Axis
    chartGroup_7.append("g")
                .attr("class", "xaxis7")
                .attr("transform", "translate(0," + (firstPeerTop) + ")")
                .call(xaxis7);

    // Add the Y Axis
    chartGroup_7.append("g")
                .attr("class", "yaxis7")
                .attr("transform", "translate(" + firstPeerLeft + ",0)")
                .call(yaxis7);

    // Add Lines
    const lines_chart7 = chartGroup_7.selectAll("lines")
                                      .data(final_bank_fcast_full)
                                      .enter().append("g")

    lines_chart7.append("path")
                .attr("class",'p_s_ids')
                .attr("d",function(d){
                    return line_gen7(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);
   
    //-----CIRCLES
    const circle_chart7 = chartGroup_7.selectAll(".p1_dot")
                                        .data(final_bank_fcast_full)
                                        .enter().append("g")
                                        .attr('fill',function(d){
                                            return d.color;
                                        });

    function p1_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
            .attr('x', function() { return xScale7(dd.date) + 55; })
            .attr('y', function() { return yScale7(dd.base) + 75; })
            .attr('id', 'p1_tooltip')
            .text('Loss Rate: '+ Math.round(dd.base).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'Bps');
    };

    function p1_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#p1_tooltip").remove();
    };

    circle_chart7.append('g').selectAll("circle")
                    .data(function(d){
                        return d.values;
                    })
                    .enter().append("circle") 
                    .attr("class", "p1_dot")
                    .attr("r", function(dd){
                            if ([5,11].indexOf(dd.date.getMonth())>=0){
                                return 5;}
                        })
                    .attr("cx", function(dd) {
                            return xScale7(dd.date); 
                        })
                    .attr("cy", function(dd) {
                            return yScale7(dd.base);
                        })
                    .on("mouseover",p1_MouseOver)
                    .on("mouseout",p1_MouseOut);

    //---------------------CHART 8--------------------------|
    //---------------------SCALES---------------------------|
    var xScale8 = d3.scaleTime()
                    .domain(fcast_date_extent) 
                    .range([secondPeerLeft, secondPeerLeft+400]); 

    var yScale8 = d3.scaleLinear()
                    .domain([0, loss_max_full_sev]) 
                    .range([secondPeerTop, secondPeerTop-small_chart_ht]); 

    // //-----------------------AXES---------------------------|
    const yaxis8 = d3.axisLeft()
                     .scale(yScale8);

    const xaxis8 = d3.axisBottom()
                     .ticks(d3.timeMonth.every(6))
                     .tickFormat(d3.timeFormat("%b %y"))
                     .scale(xScale8);

    // creating a line generator - it generates x-y coords
    var line_gen8 = d3.line()
                      .x(function(d) {return xScale8(d.date); }) // set the x values for the line generator
                      .y(function(d) {return yScale8(d.sev); }); // set the y values for the line generator 

    var chartGroup_8 = svg.append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add the X Axis
    chartGroup_8.append("g")
                .attr("class", "xaxis8")
                .attr("transform", "translate(0," + (secondPeerTop) + ")")
                .call(xaxis8);

    // Add the Y Axis
    chartGroup_8.append("g")
                .attr("class", "yaxis8")
                .attr("transform", "translate(" + secondPeerLeft + ",0)")
                .call(yaxis8);

    // Add Lines
    const lines_chart8 = chartGroup_8.selectAll("lines")
                                      .data(final_bank_fcast_full)
                                      .enter().append("g")

    lines_chart8.append("path")
                .attr("class",'p_s_ids')
                .attr("d",function(d){
                    return line_gen8(d.values);
                })
                .attr('stroke', function(d) {
                    return d.color;
                })
                .attr('fill','None')
                .attr('stroke-width',2);

    //-----CIRCLES
    const circle_chart8 = chartGroup_8.selectAll(".p2_dot")
                                        .data(final_bank_fcast_full)
                                        .enter().append("g")
                                        .attr('fill',function(d){
                                            return d.color;
                                    });

    function p2_MouseOver(dd) {
        var r = d3.select(this).attr('r', 10);

        svg.append("text")
            .attr('x', function() { return xScale8(dd.date) + 55; })
            .attr('y', function() { return yScale8(dd.sev) + 75; })
            .attr('id', 'p2_tooltip')
            .text('Loss Rate: '+ Math.round(dd.sev).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'Bps');
    };

    function p2_MouseOut(dd) {
        var r = d3.select(this).attr('r',5);
        d3.selectAll("#p2_tooltip").remove();
    };

    circle_chart8.append('g').selectAll("circle")
                .data(function(d){
                    return d.values;
                })
                .enter().append("circle") 
                .attr("class", "p2_dot")
                .attr("r", function(dd){
                        if ([5,11].indexOf(dd.date.getMonth())>=0){
                            return 5;}
                    })
                .attr("cx", function(dd) {
                        return xScale8(dd.date); 
                    })
                .attr("cy", function(dd) {
                        return yScale8(dd.sev);
                    })
                .on("mouseover",p2_MouseOver)
                .on("mouseout",p2_MouseOut);
};

function p_remover(){
    d3.selectAll(".r9q_ids").remove();
    d3.selectAll(".p_s_ids").remove();
    d3.selectAll(".xaxis7").remove();
    d3.selectAll(".yaxis7").remove();
    d3.selectAll(".xaxis8").remove();
    d3.selectAll(".yaxis8").remove();
    d3.selectAll(".p1_dot").remove();
    d3.selectAll(".p2_dot").remove();
};


//-------------------------------CHOROPLETH FUNCITON---------------------------------------------------|
function createUSMap(bank_nm, usa, peer_loc, prod_nm){

    var bank_loc_map = d3.map();

    var selected_bank_rssd = bank_info_map.get(bank_nm);
    var used_peer_loc0 = peer_loc.filter(e => e.rssd_id==selected_bank_rssd)
    var used_peer_loc = used_peer_loc0.filter(e => e.portfolio==prod_nm)

    var map1 = svg.append('g')
        .attr('class','mapgroup')
        .selectAll('choro_1')
        .data(usa);


    var flags3 = [], unq_states = [], l = used_peer_loc.length, i;
    for( var i=0; i<l; i++) {
        if( flags3[used_peer_loc[i].state]) continue;
        flags3[used_peer_loc[i].state] = true;
        unq_states.push(used_peer_loc[i].state);
    };

    for (var k=0; k<used_peer_loc.length;k++){
        bank_loc_map.set(used_peer_loc[k].state, +used_peer_loc[k].present);  
    };

    // enter code to create color scale
    var map_colors = ['#f7f7f7','#238b45','lightblue'];

    var color = d3.scaleQuantile()
                  .domain([0,2])
                  .range(map_colors);

    map1.enter()
        .append("path")
        .attr('class','choro_1')
        .attr("stroke","black")
        .attr("stroke-width",0.05)
        .attr("fill", function(d) { 
        if (bank_loc_map.get(d.properties.name) ==undefined){
        return 'white';
        }
        else{
        return color(bank_loc_map.get(d.properties.name));}
        })
        .attr("d", path)
        .on("mousemove",function(d){
        this.style.fill = '#c7f0d7';
        })
        .on("mouseout",function(d){
        if (bank_loc_map.get(d.properties.name) ==undefined){
        return this.style.fill = 'white';
        }
        else{
        return this.style.fill = color(bank_loc_map.get(d.properties.name));}
        })
        .attr("transform","translate(1300,1025)rotate(180)scale(-10,12)");

    var projection = d3.geoMercator()
    var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-20, 20]);

    svg.call(tip);

    var temp_b0_loc = used_peer_loc.filter(e => e.peer=='bank0')[0];
    var temp_b1_loc = used_peer_loc.filter(e => e.peer=='bank1')[0];
    var temp_b2_loc = used_peer_loc.filter(e => e.peer=='bank2')[0];
    var temp_b3_loc = used_peer_loc.filter(e => e.peer=='bank3')[0];

    // points
    b0_loc = {color: temp_b0_loc.color, values: [temp_b0_loc.loc_x, temp_b0_loc.loc_y,temp_b0_loc.size,temp_b0_loc.name,temp_b0_loc.assets,temp_b0_loc.state]};
    b1_loc = {color: temp_b1_loc.color, values: [temp_b1_loc.loc_x, temp_b1_loc.loc_y,temp_b1_loc.size,temp_b1_loc.name,temp_b1_loc.assets,temp_b1_loc.state]};
    b2_loc = {color: temp_b2_loc.color, values: [temp_b2_loc.loc_x, temp_b2_loc.loc_y,temp_b2_loc.size,temp_b2_loc.name,temp_b2_loc.assets,temp_b2_loc.state]};
    b3_loc = {color: temp_b3_loc.color, values: [temp_b3_loc.loc_x, temp_b3_loc.loc_y,temp_b3_loc.size,temp_b3_loc.name,temp_b3_loc.assets,temp_b3_loc.state]};

    svg.selectAll("circle.circle_choro")
        .data([b0_loc, b1_loc, b2_loc, b3_loc]).enter()
        .append("circle")
        .attr('class','circle_choro')
        .attr("cx", function (d) {return projection(d.values)[0]; })
        .attr("cy", function (d) { return projection(d.values)[1]; })
        .attr("r", function (d) { return d.values[2]+"px"; })
        .attr("transform","translate(0,700)rotate(180)scale(-1,1)")
        .attr("fill", function (d) { return d.color; })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)


    tip.html(function(d) {
        return '<B>Bank:</B> ' + d.values[3] + '<br>' +
                '<B>HQ State:</B> ' + d.values[5] + '<br>' +
                '<B>Total Assets ($Bn)</B> : ' + d.values[4];
    });
};

function c_remover(){
    d3.selectAll(".circle_choro").remove();
    d3.selectAll(".mapgroup").remove();
    d3.selectAll(".choro_1").remove();
};
