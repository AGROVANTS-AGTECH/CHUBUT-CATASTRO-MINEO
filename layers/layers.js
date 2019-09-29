var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PROVINCIAS_1 = new ol.format.GeoJSON();
var features_PROVINCIAS_1 = format_PROVINCIAS_1.readFeatures(json_PROVINCIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_1.addFeatures(features_PROVINCIAS_1);
var lyr_PROVINCIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_1, 
                style: style_PROVINCIAS_1,
                interactive: false,
                title: '<img src="styles/legend/PROVINCIAS_1.png" /> PROVINCIAS'
            });
var format_Chubut_servidumbres_2 = new ol.format.GeoJSON();
var features_Chubut_servidumbres_2 = format_Chubut_servidumbres_2.readFeatures(json_Chubut_servidumbres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chubut_servidumbres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chubut_servidumbres_2.addFeatures(features_Chubut_servidumbres_2);
var lyr_Chubut_servidumbres_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chubut_servidumbres_2, 
                style: style_Chubut_servidumbres_2,
                interactive: true,
                title: '<img src="styles/legend/Chubut_servidumbres_2.png" /> Chubut_servidumbres'
            });
var format_Chubut_minas_3 = new ol.format.GeoJSON();
var features_Chubut_minas_3 = format_Chubut_minas_3.readFeatures(json_Chubut_minas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chubut_minas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chubut_minas_3.addFeatures(features_Chubut_minas_3);
var lyr_Chubut_minas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chubut_minas_3, 
                style: style_Chubut_minas_3,
                interactive: true,
                title: '<img src="styles/legend/Chubut_minas_3.png" /> Chubut_minas'
            });
var format_Chubut_manifestaciones_4 = new ol.format.GeoJSON();
var features_Chubut_manifestaciones_4 = format_Chubut_manifestaciones_4.readFeatures(json_Chubut_manifestaciones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chubut_manifestaciones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chubut_manifestaciones_4.addFeatures(features_Chubut_manifestaciones_4);
var lyr_Chubut_manifestaciones_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chubut_manifestaciones_4, 
                style: style_Chubut_manifestaciones_4,
                interactive: true,
                title: '<img src="styles/legend/Chubut_manifestaciones_4.png" /> Chubut_manifestaciones'
            });
var format_Chubut_cateos_5 = new ol.format.GeoJSON();
var features_Chubut_cateos_5 = format_Chubut_cateos_5.readFeatures(json_Chubut_cateos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chubut_cateos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chubut_cateos_5.addFeatures(features_Chubut_cateos_5);
var lyr_Chubut_cateos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chubut_cateos_5, 
                style: style_Chubut_cateos_5,
                interactive: true,
                title: '<img src="styles/legend/Chubut_cateos_5.png" /> Chubut_cateos'
            });
var format_Chubut_canteras_6 = new ol.format.GeoJSON();
var features_Chubut_canteras_6 = format_Chubut_canteras_6.readFeatures(json_Chubut_canteras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chubut_canteras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chubut_canteras_6.addFeatures(features_Chubut_canteras_6);
var lyr_Chubut_canteras_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chubut_canteras_6, 
                style: style_Chubut_canteras_6,
                interactive: true,
                title: '<img src="styles/legend/Chubut_canteras_6.png" /> Chubut_canteras'
            });

lyr_Googlestreet_0.setVisible(true);lyr_PROVINCIAS_1.setVisible(true);lyr_Chubut_servidumbres_2.setVisible(true);lyr_Chubut_minas_3.setVisible(true);lyr_Chubut_manifestaciones_4.setVisible(true);lyr_Chubut_cateos_5.setVisible(true);lyr_Chubut_canteras_6.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_PROVINCIAS_1,lyr_Chubut_servidumbres_2,lyr_Chubut_minas_3,lyr_Chubut_manifestaciones_4,lyr_Chubut_cateos_5,lyr_Chubut_canteras_6];
lyr_PROVINCIAS_1.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', });
lyr_Chubut_servidumbres_2.set('fieldAliases', {'PROPIEDADE': 'PROPIEDADE', });
lyr_Chubut_minas_3.set('fieldAliases', {'PROPIEDADE': 'PROPIEDADE', 'EXPEDIENTE': 'EXPEDIENTE', });
lyr_Chubut_manifestaciones_4.set('fieldAliases', {'PROPIEDADE': 'PROPIEDADE', 'EXPEDIENTE': 'EXPEDIENTE', });
lyr_Chubut_cateos_5.set('fieldAliases', {'PROPIEDAD': 'PROPIEDAD', 'EXPEDIENTE': 'EXPEDIENTE', });
lyr_Chubut_canteras_6.set('fieldAliases', {'propiedade': 'propiedade', 'expediente': 'expediente', });
lyr_PROVINCIAS_1.set('fieldImages', {'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', });
lyr_Chubut_servidumbres_2.set('fieldImages', {'PROPIEDADE': 'TextEdit', });
lyr_Chubut_minas_3.set('fieldImages', {'PROPIEDADE': 'TextEdit', 'EXPEDIENTE': 'TextEdit', });
lyr_Chubut_manifestaciones_4.set('fieldImages', {'PROPIEDADE': 'TextEdit', 'EXPEDIENTE': 'TextEdit', });
lyr_Chubut_cateos_5.set('fieldImages', {'PROPIEDAD': 'TextEdit', 'EXPEDIENTE': 'TextEdit', });
lyr_Chubut_canteras_6.set('fieldImages', {'propiedade': 'TextEdit', 'expediente': 'TextEdit', });
lyr_PROVINCIAS_1.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'SAG': 'no label', });
lyr_Chubut_servidumbres_2.set('fieldLabels', {'PROPIEDADE': 'header label', });
lyr_Chubut_minas_3.set('fieldLabels', {'PROPIEDADE': 'inline label', 'EXPEDIENTE': 'header label', });
lyr_Chubut_manifestaciones_4.set('fieldLabels', {'PROPIEDADE': 'inline label', 'EXPEDIENTE': 'header label', });
lyr_Chubut_cateos_5.set('fieldLabels', {'PROPIEDAD': 'inline label', 'EXPEDIENTE': 'header label', });
lyr_Chubut_canteras_6.set('fieldLabels', {'propiedade': 'inline label', 'expediente': 'header label', });
lyr_Chubut_canteras_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});