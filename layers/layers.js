var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Properties_1 = new ol.format.GeoJSON();
var features_Properties_1 = format_Properties_1.readFeatures(json_Properties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Properties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Properties_1.addFeatures(features_Properties_1);
var lyr_Properties_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Properties_1, 
                style: style_Properties_1,
                popuplayertitle: 'Properties',
                interactive: true,
                title: '<img src="styles/legend/Properties_1.png" /> Properties'
            });
var format_StudyArea_2 = new ol.format.GeoJSON();
var features_StudyArea_2 = format_StudyArea_2.readFeatures(json_StudyArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_2.addFeatures(features_StudyArea_2);
var lyr_StudyArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_2, 
                style: style_StudyArea_2,
                popuplayertitle: 'StudyArea',
                interactive: true,
                title: '<img src="styles/legend/StudyArea_2.png" /> StudyArea'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Properties_1.setVisible(true);lyr_StudyArea_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Properties_1,lyr_StudyArea_2];
lyr_Properties_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SG26_CODE': 'SG26_CODE', 'SL_LAND_PRCL_KEY': 'SL_LAND_PRCL_KEY', 'ADR_NO': 'ADR_NO', 'ADR_NO_SFX': 'ADR_NO_SFX', 'STR_NAME': 'STR_NAME', 'LU_STR_NAME_TYPE': 'LU_STR_NAME_TYPE', 'OFC_SBRB_NAME': 'OFC_SBRB_NAME', 'ALT_NAME': 'ALT_NAME', 'LU_LGL_STS_DSCR': 'LU_LGL_STS_DSCR', 'PRTY_NMBR': 'PRTY_NMBR', 'ZONING': 'ZONING', 'SUB_CNCL_NMBR': 'SUB_CNCL_NMBR', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Cadastral_Record': 'Cadastral_Record', 'Deeds_Record': 'Deeds_Record', });
lyr_StudyArea_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Properties_1.set('fieldImages', {'OBJECTID': 'Range', 'SG26_CODE': 'TextEdit', 'SL_LAND_PRCL_KEY': 'Range', 'ADR_NO': 'Range', 'ADR_NO_SFX': 'TextEdit', 'STR_NAME': 'TextEdit', 'LU_STR_NAME_TYPE': 'TextEdit', 'OFC_SBRB_NAME': 'TextEdit', 'ALT_NAME': 'TextEdit', 'LU_LGL_STS_DSCR': 'TextEdit', 'PRTY_NMBR': 'TextEdit', 'ZONING': 'TextEdit', 'SUB_CNCL_NMBR': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Cadastral_Record': 'TextEdit', 'Deeds_Record': 'TextEdit', });
lyr_StudyArea_2.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Properties_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'SG26_CODE': 'header label - always visible', 'SL_LAND_PRCL_KEY': 'hidden field', 'ADR_NO': 'header label - always visible', 'ADR_NO_SFX': 'hidden field', 'STR_NAME': 'header label - always visible', 'LU_STR_NAME_TYPE': 'hidden field', 'OFC_SBRB_NAME': 'header label - always visible', 'ALT_NAME': 'hidden field', 'LU_LGL_STS_DSCR': 'hidden field', 'PRTY_NMBR': 'header label - always visible', 'ZONING': 'header label - always visible', 'SUB_CNCL_NMBR': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Cadastral_Record': 'header label - always visible', 'Deeds_Record': 'header label - always visible', });
lyr_StudyArea_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_StudyArea_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});