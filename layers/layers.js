var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WadukdanSungai_1 = new ol.format.GeoJSON();
var features_WadukdanSungai_1 = format_WadukdanSungai_1.readFeatures(json_WadukdanSungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WadukdanSungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WadukdanSungai_1.addFeatures(features_WadukdanSungai_1);
var lyr_WadukdanSungai_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WadukdanSungai_1, 
                style: style_WadukdanSungai_1,
                interactive: true,
    title: 'Waduk dan Sungai<br />\
    <img src="styles/legend/WadukdanSungai_1_0.png" /> Kali Porong<br />\
    <img src="styles/legend/WadukdanSungai_1_1.png" /> Waduk<br />\
    <img src="styles/legend/WadukdanSungai_1_2.png" /> <br />'
        });
var format_FixGeometri2_2 = new ol.format.GeoJSON();
var features_FixGeometri2_2 = format_FixGeometri2_2.readFeatures(json_FixGeometri2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FixGeometri2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FixGeometri2_2.addFeatures(features_FixGeometri2_2);
var lyr_FixGeometri2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FixGeometri2_2, 
                style: style_FixGeometri2_2,
                interactive: true,
    title: 'Fix Geometri 2<br />\
    <img src="styles/legend/FixGeometri2_2_0.png" /> Bangunan Industri<br />\
    <img src="styles/legend/FixGeometri2_2_1.png" /> Bangunan Perdagangan (Pasar)<br />\
    <img src="styles/legend/FixGeometri2_2_2.png" /> Bangunan Permukiman Desa<br />\
    <img src="styles/legend/FixGeometri2_2_3.png" /> Sawah<br />\
    <img src="styles/legend/FixGeometri2_2_4.png" /> <br />'
        });
var format_FIXGEOMETRIS2PL_2023_3 = new ol.format.GeoJSON();
var features_FIXGEOMETRIS2PL_2023_3 = format_FIXGEOMETRIS2PL_2023_3.readFeatures(json_FIXGEOMETRIS2PL_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXGEOMETRIS2PL_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXGEOMETRIS2PL_2023_3.addFeatures(features_FIXGEOMETRIS2PL_2023_3);
var lyr_FIXGEOMETRIS2PL_2023_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FIXGEOMETRIS2PL_2023_3, 
                style: style_FIXGEOMETRIS2PL_2023_3,
                interactive: true,
    title: 'FIX GEOMETRIS 2 PL_2023<br />\
    <img src="styles/legend/FIXGEOMETRIS2PL_2023_3_0.png" /> Lapangan<br />\
    <img src="styles/legend/FIXGEOMETRIS2PL_2023_3_1.png" /> Pekarangan<br />\
    <img src="styles/legend/FIXGEOMETRIS2PL_2023_3_2.png" /> Permukiman Padat Teratur<br />\
    <img src="styles/legend/FIXGEOMETRIS2PL_2023_3_3.png" /> Permukiman Padat Tidak Teratur<br />\
    <img src="styles/legend/FIXGEOMETRIS2PL_2023_3_4.png" /> Semak<br />\
    <img src="styles/legend/FIXGEOMETRIS2PL_2023_3_5.png" /> <br />'
        });
var format_mergeintersection_4 = new ol.format.GeoJSON();
var features_mergeintersection_4 = format_mergeintersection_4.readFeatures(json_mergeintersection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergeintersection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergeintersection_4.addFeatures(features_mergeintersection_4);
var lyr_mergeintersection_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mergeintersection_4, 
                style: style_mergeintersection_4,
                interactive: true,
                title: '<img src="styles/legend/mergeintersection_4.png" /> merge intersection'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WadukdanSungai_1.setVisible(true);lyr_FixGeometri2_2.setVisible(true);lyr_FIXGEOMETRIS2PL_2023_3.setVisible(true);lyr_mergeintersection_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WadukdanSungai_1,lyr_FixGeometri2_2,lyr_FIXGEOMETRIS2PL_2023_3,lyr_mergeintersection_4];
lyr_WadukdanSungai_1.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'Luas_PL': 'Luas_PL', });
lyr_FixGeometri2_2.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'Luas_PL': 'Luas_PL', });
lyr_FIXGEOMETRIS2PL_2023_3.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'Luas_PL': 'Luas_PL', 'PL_2023': 'PL_2023', 'Perubahan': 'Perubahan', 'Luas_Ha_PL': 'Luas_Ha_PL', });
lyr_mergeintersection_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LUASWH': 'LUASWH', 'LCODE': 'LCODE', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Titik': 'Titik', 'Foto': 'Foto', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'Keterangan': 'Keterangan', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Loca': 'Photo Loca', 'Photo Alti': 'Photo Alti', 'Device Typ': 'Device Typ', 'layer': 'layer', 'path': 'path', });
lyr_WadukdanSungai_1.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'Luas_PL': 'TextEdit', });
lyr_FixGeometri2_2.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'Luas_PL': 'TextEdit', });
lyr_FIXGEOMETRIS2PL_2023_3.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'Luas_PL': 'TextEdit', 'PL_2023': 'TextEdit', 'Perubahan': 'TextEdit', 'Luas_Ha_PL': 'TextEdit', });
lyr_mergeintersection_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'NAMOBJ': '', 'REMARK': '', 'LUASWH': '', 'LCODE': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Titik': '', 'Foto': '', 'PL_2019': '', 'PL_2023': '', 'Keterangan': '', 'pdfmaps_ph': '', 'Photo Name': '', 'Photo Date': '', 'Photo Loca': '', 'Photo Alti': '', 'Device Typ': '', 'layer': '', 'path': '', });
lyr_WadukdanSungai_1.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'Luas_PL': 'inline label', });
lyr_FixGeometri2_2.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'Luas_PL': 'inline label', });
lyr_FIXGEOMETRIS2PL_2023_3.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'Luas_PL': 'inline label', 'PL_2023': 'inline label', 'Perubahan': 'inline label', 'Luas_Ha_PL': 'inline label', });
lyr_mergeintersection_4.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'LUASWH': 'no label', 'LCODE': 'no label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Titik': 'inline label', 'Foto': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'Keterangan': 'inline label', 'pdfmaps_ph': 'no label', 'Photo Name': 'no label', 'Photo Date': 'no label', 'Photo Loca': 'no label', 'Photo Alti': 'no label', 'Device Typ': 'inline label', 'layer': 'no label', 'path': 'no label', });
lyr_mergeintersection_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});