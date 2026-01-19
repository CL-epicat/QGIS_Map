var wms_layers = [];

var format_NHWhiteNHBlack_0 = new ol.format.GeoJSON();
var features_NHWhiteNHBlack_0 = format_NHWhiteNHBlack_0.readFeatures(json_NHWhiteNHBlack_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHWhiteNHBlack_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHWhiteNHBlack_0.addFeatures(features_NHWhiteNHBlack_0);
var lyr_NHWhiteNHBlack_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHWhiteNHBlack_0, 
                style: style_NHWhiteNHBlack_0,
                popuplayertitle: 'NH-White & NH-Black',
                interactive: false,
    title: 'NH-White & NH-Black<br />\
    <img src="styles/legend/NHWhiteNHBlack_0_0.png" /> NHB-resilient & NHW-resilient<br />\
    <img src="styles/legend/NHWhiteNHBlack_0_1.png" /> NHB-resilient & NHW-at risk<br />\
    <img src="styles/legend/NHWhiteNHBlack_0_2.png" /> NHB-at risk & NHW-resilient<br />\
    <img src="styles/legend/NHWhiteNHBlack_0_3.png" /> NHB-at risk & NHW-at risk<br />\
    <img src="styles/legend/NHWhiteNHBlack_0_4.png" /> Other<br />' });
var format_NHWhiteGroup_1 = new ol.format.GeoJSON();
var features_NHWhiteGroup_1 = format_NHWhiteGroup_1.readFeatures(json_NHWhiteGroup_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHWhiteGroup_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHWhiteGroup_1.addFeatures(features_NHWhiteGroup_1);
var lyr_NHWhiteGroup_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHWhiteGroup_1, 
                style: style_NHWhiteGroup_1,
                popuplayertitle: 'NH-White Group',
                interactive: false,
    title: 'NH-White Group<br />\
    <img src="styles/legend/NHWhiteGroup_1_0.png" /> Resilient<br />\
    <img src="styles/legend/NHWhiteGroup_1_1.png" /> At risk<br />\
    <img src="styles/legend/NHWhiteGroup_1_2.png" /> Other<br />' });
var format_NHBlackGroup_2 = new ol.format.GeoJSON();
var features_NHBlackGroup_2 = format_NHBlackGroup_2.readFeatures(json_NHBlackGroup_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHBlackGroup_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHBlackGroup_2.addFeatures(features_NHBlackGroup_2);
var lyr_NHBlackGroup_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHBlackGroup_2, 
                style: style_NHBlackGroup_2,
                popuplayertitle: 'NH-Black Group',
                interactive: false,
    title: 'NH-Black Group<br />\
    <img src="styles/legend/NHBlackGroup_2_0.png" /> Resilient<br />\
    <img src="styles/legend/NHBlackGroup_2_1.png" /> At risk<br />\
    <img src="styles/legend/NHBlackGroup_2_2.png" /> Other<br />' });
var format_CountyBorder_3 = new ol.format.GeoJSON();
var features_CountyBorder_3 = format_CountyBorder_3.readFeatures(json_CountyBorder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBorder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBorder_3.addFeatures(features_CountyBorder_3);
var lyr_CountyBorder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBorder_3, 
                style: style_CountyBorder_3,
                popuplayertitle: 'County Border',
                interactive: false,
                title: '<img src="styles/legend/CountyBorder_3.png" /> County Border'
            });

lyr_NHWhiteNHBlack_0.setVisible(true);lyr_NHWhiteGroup_1.setVisible(true);lyr_NHBlackGroup_2.setVisible(true);lyr_CountyBorder_3.setVisible(true);
var layersList = [lyr_NHWhiteNHBlack_0,lyr_NHWhiteGroup_1,lyr_NHBlackGroup_2,lyr_CountyBorder_3];
lyr_NHWhiteNHBlack_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'census_id': 'census_id', 'census_id2': 'census_id2', 'nhblack_gr': 'nhblack_gr', 'nhwhite_gr': 'nhwhite_gr', 'census_tract_cross_census_id2': 'census_tract_cross_census_id2', 'census_tract_cross_county_id': 'census_tract_cross_county_id', 'census_tract_cross_nhblack_grp': 'census_tract_cross_nhblack_grp', 'census_tract_cross_black_censored': 'census_tract_cross_black_censored', 'census_tract_cross_nhwhite_grp': 'census_tract_cross_nhwhite_grp', 'census_tract_cross_white_censored': 'census_tract_cross_white_censored', 'census_tract_cross_NHW_NHB_cross': 'census_tract_cross_NHW_NHB_cross', });
lyr_NHWhiteGroup_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'census_id': 'census_id', 'census_id2': 'census_id2', 'nhblack_gr': 'nhblack_gr', 'nhwhite_gr': 'nhwhite_gr', 'census_tract_cross_census_id2': 'census_tract_cross_census_id2', 'census_tract_cross_county_id': 'census_tract_cross_county_id', 'census_tract_cross_nhblack_grp': 'census_tract_cross_nhblack_grp', 'census_tract_cross_black_censored': 'census_tract_cross_black_censored', 'census_tract_cross_nhwhite_grp': 'census_tract_cross_nhwhite_grp', 'census_tract_cross_white_censored': 'census_tract_cross_white_censored', 'census_tract_cross_NHW_NHB_cross': 'census_tract_cross_NHW_NHB_cross', });
lyr_NHBlackGroup_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'census_id': 'census_id', 'census_id2': 'census_id2', 'nhblack_gr': 'nhblack_gr', 'nhwhite_gr': 'nhwhite_gr', });
lyr_CountyBorder_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'totpop10': 'totpop10', 'WFD': 'WFD', 'RDC_AAA': 'RDC_AAA', 'MNGWPD': 'MNGWPD', 'MPO': 'MPO', 'MSA': 'MSA', 'F1HR_NA': 'F1HR_NA', 'F8HR_NA': 'F8HR_NA', 'Reg_Comm': 'Reg_Comm', 'Acres': 'Acres', 'Sq_Miles': 'Sq_Miles', 'Label': 'Label', 'GlobalID': 'GlobalID', 'last_edite': 'last_edite', 'metro': 'metro', });
lyr_NHWhiteNHBlack_0.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'census_id': 'TextEdit', 'census_id2': 'TextEdit', 'nhblack_gr': 'TextEdit', 'nhwhite_gr': 'TextEdit', 'census_tract_cross_census_id2': 'TextEdit', 'census_tract_cross_county_id': 'TextEdit', 'census_tract_cross_nhblack_grp': 'TextEdit', 'census_tract_cross_black_censored': 'TextEdit', 'census_tract_cross_nhwhite_grp': 'TextEdit', 'census_tract_cross_white_censored': 'TextEdit', 'census_tract_cross_NHW_NHB_cross': 'TextEdit', });
lyr_NHWhiteGroup_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'census_id': 'TextEdit', 'census_id2': 'TextEdit', 'nhblack_gr': 'TextEdit', 'nhwhite_gr': 'TextEdit', 'census_tract_cross_census_id2': 'TextEdit', 'census_tract_cross_county_id': 'TextEdit', 'census_tract_cross_nhblack_grp': 'TextEdit', 'census_tract_cross_black_censored': 'TextEdit', 'census_tract_cross_nhwhite_grp': 'TextEdit', 'census_tract_cross_white_censored': 'TextEdit', 'census_tract_cross_NHW_NHB_cross': 'TextEdit', });
lyr_NHBlackGroup_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'census_id': 'TextEdit', 'census_id2': 'TextEdit', 'nhblack_gr': 'TextEdit', 'nhwhite_gr': 'TextEdit', });
lyr_CountyBorder_3.set('fieldImages', {'OBJECTID': 'Range', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'NAMELSAD10': 'TextEdit', 'totpop10': 'Range', 'WFD': 'TextEdit', 'RDC_AAA': 'TextEdit', 'MNGWPD': 'TextEdit', 'MPO': 'TextEdit', 'MSA': 'TextEdit', 'F1HR_NA': 'TextEdit', 'F8HR_NA': 'TextEdit', 'Reg_Comm': 'TextEdit', 'Acres': 'TextEdit', 'Sq_Miles': 'TextEdit', 'Label': 'TextEdit', 'GlobalID': 'TextEdit', 'last_edite': 'DateTime', 'metro': 'TextEdit', });
lyr_NHWhiteNHBlack_0.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'GEOID': 'inline label - visible with data', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'census_id': 'hidden field', 'census_id2': 'hidden field', 'nhblack_gr': 'hidden field', 'nhwhite_gr': 'hidden field', 'census_tract_cross_census_id2': 'hidden field', 'census_tract_cross_county_id': 'hidden field', 'census_tract_cross_nhblack_grp': 'hidden field', 'census_tract_cross_black_censored': 'hidden field', 'census_tract_cross_nhwhite_grp': 'hidden field', 'census_tract_cross_white_censored': 'hidden field', 'census_tract_cross_NHW_NHB_cross': 'hidden field', });
lyr_NHWhiteGroup_1.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'GEOID': 'inline label - visible with data', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'census_id': 'hidden field', 'census_id2': 'hidden field', 'nhblack_gr': 'hidden field', 'nhwhite_gr': 'hidden field', 'census_tract_cross_census_id2': 'hidden field', 'census_tract_cross_county_id': 'hidden field', 'census_tract_cross_nhblack_grp': 'hidden field', 'census_tract_cross_black_censored': 'hidden field', 'census_tract_cross_nhwhite_grp': 'hidden field', 'census_tract_cross_white_censored': 'hidden field', 'census_tract_cross_NHW_NHB_cross': 'hidden field', });
lyr_NHBlackGroup_2.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'GEOID': 'inline label - visible with data', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'census_id': 'hidden field', 'census_id2': 'hidden field', 'nhblack_gr': 'hidden field', 'nhwhite_gr': 'hidden field', });
lyr_CountyBorder_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'STATEFP10': 'hidden field', 'COUNTYFP10': 'hidden field', 'GEOID10': 'hidden field', 'NAME10': 'hidden field', 'NAMELSAD10': 'hidden field', 'totpop10': 'hidden field', 'WFD': 'hidden field', 'RDC_AAA': 'hidden field', 'MNGWPD': 'hidden field', 'MPO': 'hidden field', 'MSA': 'hidden field', 'F1HR_NA': 'hidden field', 'F8HR_NA': 'hidden field', 'Reg_Comm': 'hidden field', 'Acres': 'hidden field', 'Sq_Miles': 'hidden field', 'Label': 'hidden field', 'GlobalID': 'hidden field', 'last_edite': 'hidden field', 'metro': 'hidden field', });
lyr_CountyBorder_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});