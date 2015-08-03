commonObsDeckSettings = {
    // gene query service -> http://localhost:3000/genes?q=MAPK
    "geneQueryUrl" : "/genes?q=",
    "sigQueryUrl" : "/signatures?q=",
    "rowTitleCallback" : function(eventId, config) {
        var eventObj = config['eventAlbum'].getEvent(eventId);
        var datatype = eventObj.metadata['datatype'];
        console.log(eventId, datatype);
        if (datatype === 'expression data') {
            // mRNA url: /wb/gene/<gene name>
            var gene = eventId.replace('_mRNA', '');
            var url = '/wb/gene/' + gene;
            window.open(url, "_self");
        } else if (datatype === 'mutation call') {
            // mRNA url: /wb/gene/<gene name>
            var gene = eventId.replace('_mutation', '');
            var url = '/wb/gene/' + gene;
            window.open(url, "_self");
        } else if (datatype === 'clinical data') {
            // clinical url: /wb/clinical/<name>
            var feature = eventId;
            var url = '/wb/clinical/' + feature;
            window.open(url, "_self");
        } else if (datatype === "kinase target activity" || datatype === "tf target activity" || datatype === "expression signature") {
            // signature url: /wb/signature/<sigName>
            var sigName = eventId;
            var url = "/wb/signature/" + sigName;
            window.open(url, "_self");
        }
    },
    "columnTitleCallback" : function(sampleId, config) {
        var url = '/wb/patient/' + sampleId;
        window.open(url, "_self");
    }
};

commonClinicalEventsDocList = [{
    "sample" : "DTB-001",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "Adeno" : "Not Adeno",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10275"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-002",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "Adeno" : "Not Adeno",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10276"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-004",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10278"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-005",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10279"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-007",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1027a"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-008",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Adrenal",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1027b"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-009",
    "Histology_Call" : "ANPC/SC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1027c"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-010",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Adeno" : "Exclude",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1027d"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-010Pro",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "Adeno" : "Exclude",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1027e"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-011",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1027f"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-013",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10280"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-014",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10281"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-014Pro",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10282"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-015",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10283"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-016",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10284"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-016Pro",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Other",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10285"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-018",
    "Histology_Call" : "Adeno/SC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Other",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10286"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-019",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10287"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-019Pro",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10288"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-020",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10289"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-021",
    "Histology_Call" : "Indeterminate",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1028a"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-022",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1028b"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-023",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1028d"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-024",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1028e"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-024Pro",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "Adeno" : "Exclude",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1028f"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-024Pro2",
    "Histology_Call" : "Unavailable",
    "study" : "prad_wcdt",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10290"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-026",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10292"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-026Pro",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10293"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-027",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10294"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-030",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lung",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10296"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-031",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10297"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-032",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10298"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-033",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10299"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-033Pro",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1029a"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-034",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1029b"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-035",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1029c"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-036",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1029d"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-037",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1029e"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-038",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1029f"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-039",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a0"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-040",
    "Histology_Call" : "ANPC/SC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a1"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-041",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a2"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-042",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a3"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-043",
    "Histology_Call" : "ANPC/SC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a4"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-044",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a5"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-045",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a6"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-046",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a7"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-047",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a8"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-049",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102a9"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-050",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102aa"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-052",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ab"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-053",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ac"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-055",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ad"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-055Pro",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ae"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-056",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102af"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-057",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b0"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-058",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b1"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-059",
    "Histology_Call" : "ANPC/SC",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b2"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-060",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Other",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b3"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-061",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b5"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-062",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b6"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-063",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b7"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-064",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102b9"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-065",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ba"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-067",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102bb"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-067Pro",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102bc"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-068",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102bd"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-069",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102be"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-070",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102bf"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-071",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c0"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-073",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c2"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-073Pro",
    "Histology_Call" : "Unavailable",
    "study" : "prad_wcdt",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c3"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-074",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c4"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-075",
    "Histology_Call" : "Unavailable",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Other",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c5"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-076",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c6"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-077",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c7"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-078",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c8"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-079",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102c9"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-080",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ca"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-080Pro",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "Adeno" : "Exclude",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102cb"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-081",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102cc"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-082",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102cd"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-083",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ce"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-084",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102cf"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-085",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d0"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-086",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d1"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-087",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d2"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-088",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d3"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-089",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d4"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-089Pro",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d5"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-090",
    "Histology_Call" : "Unavailable",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Exclude",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d6"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-091",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d7"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-092",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d8"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-093",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Exclude",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102d9"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-094",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102da"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-095",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102db"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-096",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102dd"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-096Pro",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102de"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-097",
    "Histology_Call" : "Indeterminate",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102df"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-098",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e1"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-099",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e2"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-101",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e4"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-102",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e5"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-103",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Other",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e6"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-104",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e8"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-105",
    "Histology_Call" : "Intermediate",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102e9"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-106",
    "Histology_Call" : "Indeterminate",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Exclude",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102eb"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-107",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ec"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-108",
    "Histology_Call" : "Indeterminate",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ed"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-109",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ee"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-110",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ef"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-111",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f0"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-112",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f2"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-115",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f5"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-116",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Exclude",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f6"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-117",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lung",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f7"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-118",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f8"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-119",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Exclude",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102f9"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-120",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lung",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102fa"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-121",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Liver",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102fb"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-122",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102fc"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-124",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102fe"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-125",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a102ff"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-126",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCD",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10300"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-127",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10301"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-128",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10302"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-129",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10303"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-130",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10304"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-131",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Not Adeno",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10305"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-132",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10306"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-133",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10307"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-134",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10308"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-135",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1030a"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-135Pro",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Lymph node",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1030b"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-137",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1030d"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-138",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Naive",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Other",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1030e"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-139",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1030f"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-140",
    "Histology_Call" : "Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10310"
    },
    "Trichotomy" : "Adeno"
}, {
    "sample" : "DTB-143",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10313"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-144",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Adeno" : "Not Adeno",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10314"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-145",
    "Histology_Call" : "QNS",
    "study" : "prad_wcdt",
    "site" : "UBC",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Exclude",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10315"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-146",
    "Histology_Call" : "ANPC/Adeno",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Resistant",
    "Adeno" : "Exclude",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10316"
    },
    "Trichotomy" : "Exclude"
}, {
    "sample" : "DTB-147",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCSF",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Resistant",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10317"
    },
    "Trichotomy" : "Small Cell"
}, {
    "sample" : "DTB-148",
    "Histology_Call" : "ANPC",
    "study" : "prad_wcdt",
    "site" : "OHSU",
    "Abiraterone" : "Naive",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Not Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a10318"
    },
    "Trichotomy" : "ANPC"
}, {
    "sample" : "DTB-156",
    "Histology_Call" : "Small Cell",
    "study" : "prad_wcdt",
    "site" : "UCLA",
    "Abiraterone" : "Resistant",
    "Adeno" : "Not Adeno",
    "Enzalutamide" : "Naive",
    "biopsy_site" : "Bone",
    "Small_Cell" : "Small Cell",
    "_id" : {
        "$oid" : "55b84ae14dc1c6ba72a1031f"
    },
    "Trichotomy" : "Small Cell"
}];

// TODO enzalutamide settings
enzObsDeckSettings = commonObsDeckSettings;
enzObsDeckSettings["pivotScores"] = {
    "object" : [{
        "name_2" : "SKI_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.82023428961"
    }, {
        "name_2" : "NR0B1_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.76844623767"
    }, {
        "name_2" : "CRKL_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.68248651769"
    }, {
        "name_2" : "MAFF_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.6357596696"
    }, {
        "name_2" : "CTCF_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.54193233652"
    }, {
        "name_2" : "SIRT6_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.53100845782"
    }, {
        "name_2" : "DHRS2_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.45295095371"
    }, {
        "name_2" : "TSC22D3_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.44838156185"
    }, {
        "name_2" : "FOXP3_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.41696800078"
    }, {
        "name_2" : "HSF1_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.40410913387"
    }, {
        "name_2" : "SRF_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.39891806226"
    }, {
        "name_2" : "PRKAA2_kinase_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.38328218377"
    }, {
        "name_2" : "TRIM28_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.33171419638"
    }, {
        "name_2" : "RXRA_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.33090924091"
    }, {
        "name_2" : "BRF2_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.32246342399"
    }, {
        "name_2" : "FANK1_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.3218630591"
    }, {
        "name_2" : "NFKB1_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.31673906504"
    }, {
        "name_2" : "MYBL2_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.31066565727"
    }, {
        "name_2" : "MAFK_tf_viper",
        "name_1" : "Enzalutamide",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.305623651"
    }, {
        "name_2" : "PPFIBP2",
        "name_1" : "Enzalutamide",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "4.48083318391"
    }, {
        "name_2" : "PLIN3",
        "name_1" : "Enzalutamide",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.71323566672"
    }, {
        "name_2" : "MT1F",
        "name_1" : "Enzalutamide",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.38503878431"
    }, {
        "name_2" : "PSMC3IP",
        "name_1" : "Enzalutamide",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.26963822429"
    }, {
        "name_2" : "HIST3H2BB",
        "name_1" : "Enzalutamide",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.15467776449"
    }]

};
enzObsDeckSettings["mongoData"] = {
    'expression' : [{
        "Study_ID" : "prad_wcdt",
        "gene" : "PPFIBP2",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 5.09307418191462
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 7.56741767294101
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 6.83551358528737
            },
            "DTB-132" : {
                "rsem_quan_log2" : 7.69182236806351
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 8.4061565249478
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 7.56384452881757
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 5.6724253419715
            },
            "DTB-131" : {
                "rsem_quan_log2" : 8.95247830624938
            },
            "DTB-124" : {
                "rsem_quan_log2" : 7.09187645827465
            },
            "DTB-060" : {
                "rsem_quan_log2" : 8.96866679319521
            },
            "DTB-061" : {
                "rsem_quan_log2" : 7.7315803897454
            },
            "DTB-004" : {
                "rsem_quan_log2" : 7.31192719355972
            },
            "DTB-005" : {
                "rsem_quan_log2" : 9.61835411504033
            },
            "DTB-002" : {
                "rsem_quan_log2" : 7.25902668058569
            },
            "DTB-003" : {
                "rsem_quan_log2" : 7.27154519848569
            },
            "DTB-001" : {
                "rsem_quan_log2" : 8.94224793400742
            },
            "DTB-069" : {
                "rsem_quan_log2" : 6.42804856717981
            },
            "DTB-040" : {
                "rsem_quan_log2" : 9.49874750640668
            },
            "DTB-046" : {
                "rsem_quan_log2" : 8.89481776330794
            },
            "DTB-008" : {
                "rsem_quan_log2" : 9.85678265649301
            },
            "DTB-009" : {
                "rsem_quan_log2" : 7.96141264979717
            },
            "DTB-121" : {
                "rsem_quan_log2" : 3.21171311689092
            },
            "DTB-120" : {
                "rsem_quan_log2" : 9.48921998056047
            },
            "DTB-020" : {
                "rsem_quan_log2" : 6.95960673014523
            },
            "DTB-102" : {
                "rsem_quan_log2" : 7.28319857719839
            },
            "DTB-022" : {
                "rsem_quan_log2" : 10.3116787325197
            },
            "DTB-023" : {
                "rsem_quan_log2" : 9.22446625334243
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 9.32061577282129
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 7.70772976735631
            },
            "DTB-089" : {
                "rsem_quan_log2" : 8.12331597018207
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 7.92732879038382
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 8.74034306681552
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 9.96946595732617
            },
            "DTB-085" : {
                "rsem_quan_log2" : 7.1684926161492
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 8.96309692782914
            },
            "DTB-083" : {
                "rsem_quan_log2" : 6.01427494262467
            },
            "DTB-080" : {
                "rsem_quan_log2" : 8.03929744139038
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 9.8373016737651
            },
            "DTB-063" : {
                "rsem_quan_log2" : 9.98142600217749
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 9.43462322406143
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 9.87998659648695
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 8.26195432848912
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 10.0116906048515
            },
            "DTB-073" : {
                "rsem_quan_log2" : 8.90547004409467
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 9.46335679839291
            },
            "DTB-071" : {
                "rsem_quan_log2" : 7.78331389697111
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 7.31714033026188
            },
            "DTB-059" : {
                "rsem_quan_log2" : 9.67687068559184
            },
            "DTB-156" : {
                "rsem_quan_log2" : 7.84124165112862
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 9.89570084061121
            },
            "DTB-053" : {
                "rsem_quan_log2" : 8.06429385645929
            },
            "DTB-018" : {
                "rsem_quan_log2" : 8.51246038886143
            },
            "DTB-118" : {
                "rsem_quan_log2" : 7.65105169117893
            },
            "DTB-038" : {
                "rsem_quan_log2" : 9.08281380555782
            },
            "DTB-011" : {
                "rsem_quan_log2" : 8.84654753510606
            },
            "DTB-036" : {
                "rsem_quan_log2" : 7.6577443167477
            },
            "DTB-035" : {
                "rsem_quan_log2" : 5.53774645066065
            },
            "DTB-034" : {
                "rsem_quan_log2" : 9.22884249476767
            },
            "DTB-110" : {
                "rsem_quan_log2" : 8.57724904645764
            },
            "DTB-032" : {
                "rsem_quan_log2" : 5.79928162152192
            },
            "DTB-031" : {
                "rsem_quan_log2" : 8.06934557275307
            },
            "DTB-030" : {
                "rsem_quan_log2" : 10.10977895134
            },
            "DTB-049" : {
                "rsem_quan_log2" : 8.12868778246505
            },
            "DTB-095" : {
                "rsem_quan_log2" : 7.88443979705091
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 8.01890730168964
            },
            "DTB-097" : {
                "rsem_quan_log2" : 8.62173944582642
            },
            "DTB-064" : {
                "rsem_quan_log2" : 9.87184457236599
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 7.95829982290035
            },
            "DTB-065" : {
                "rsem_quan_log2" : 7.27469216879361
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "PLIN3",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 6.13498275433353
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 6.71113143387221
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 4.31236748535643
            },
            "DTB-132" : {
                "rsem_quan_log2" : 4.79900439018324
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 8.18447272028093
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 7.63874505566328
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 7.57742882803575
            },
            "DTB-131" : {
                "rsem_quan_log2" : 7.3787708342311
            },
            "DTB-124" : {
                "rsem_quan_log2" : 6.56605403817109
            },
            "DTB-060" : {
                "rsem_quan_log2" : 6.53397909095731
            },
            "DTB-061" : {
                "rsem_quan_log2" : 8.07804830735056
            },
            "DTB-004" : {
                "rsem_quan_log2" : 7.31192719355972
            },
            "DTB-005" : {
                "rsem_quan_log2" : 9.39522328527162
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 7.21588046661231
            },
            "DTB-001" : {
                "rsem_quan_log2" : 8.09659551782982
            },
            "DTB-069" : {
                "rsem_quan_log2" : 7.58863519148621
            },
            "DTB-040" : {
                "rsem_quan_log2" : 8.33739444218582
            },
            "DTB-046" : {
                "rsem_quan_log2" : 7.4594316186373
            },
            "DTB-008" : {
                "rsem_quan_log2" : 9.02271651466619
            },
            "DTB-009" : {
                "rsem_quan_log2" : 9.2131754410763
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 9.34575983332656
            },
            "DTB-020" : {
                "rsem_quan_log2" : 7.96809766590269
            },
            "DTB-102" : {
                "rsem_quan_log2" : 6.58853625498618
            },
            "DTB-022" : {
                "rsem_quan_log2" : 8.11412544493356
            },
            "DTB-023" : {
                "rsem_quan_log2" : 8.91006823611109
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 6.21812824316689
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 7.84038706863918
            },
            "DTB-089" : {
                "rsem_quan_log2" : 6.59706032950051
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 8.24807130121132
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 8.179356282672
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 9.16319000316959
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 6.76961439864112
            },
            "DTB-083" : {
                "rsem_quan_log2" : 5.03642420752668
            },
            "DTB-080" : {
                "rsem_quan_log2" : 7.18811998635855
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 5.9388691513727
            },
            "DTB-063" : {
                "rsem_quan_log2" : 9.15976313059254
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 6.75563537238322
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 8.52143280256082
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 7.91690413475862
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 7.35341857364774
            },
            "DTB-073" : {
                "rsem_quan_log2" : 7.87115859992555
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-071" : {
                "rsem_quan_log2" : 8.04525674606059
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-059" : {
                "rsem_quan_log2" : 8.00267158265445
            },
            "DTB-156" : {
                "rsem_quan_log2" : 7.8593105222748
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 8.68188282391497
            },
            "DTB-053" : {
                "rsem_quan_log2" : 8.2336196767597
            },
            "DTB-018" : {
                "rsem_quan_log2" : 8.33712278142842
            },
            "DTB-118" : {
                "rsem_quan_log2" : 5.4150386263839
            },
            "DTB-038" : {
                "rsem_quan_log2" : 8.62437949040051
            },
            "DTB-011" : {
                "rsem_quan_log2" : 8.21765095628627
            },
            "DTB-036" : {
                "rsem_quan_log2" : 7.04265637440731
            },
            "DTB-035" : {
                "rsem_quan_log2" : 5.13302504487554
            },
            "DTB-034" : {
                "rsem_quan_log2" : 7.63676815793467
            },
            "DTB-110" : {
                "rsem_quan_log2" : 7.43978102756777
            },
            "DTB-032" : {
                "rsem_quan_log2" : 5.01122725542325
            },
            "DTB-031" : {
                "rsem_quan_log2" : 5.17836806595407
            },
            "DTB-030" : {
                "rsem_quan_log2" : 9.29286823473108
            },
            "DTB-049" : {
                "rsem_quan_log2" : 7.42890197150285
            },
            "DTB-095" : {
                "rsem_quan_log2" : 5.90264041331739
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 5.62777315867432
            },
            "DTB-097" : {
                "rsem_quan_log2" : 8.19212214711686
            },
            "DTB-064" : {
                "rsem_quan_log2" : 7.8303630861357
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 9.01142882721774
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "MT1F",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 5.21508058507303
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 5.59005702878512
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 5.49266077942241
            },
            "DTB-132" : {
                "rsem_quan_log2" : 3.31413093634667
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 10.0178917123858
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 2.12462590829198
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 6.97727992349992
            },
            "DTB-131" : {
                "rsem_quan_log2" : 5.04255679257756
            },
            "DTB-124" : {
                "rsem_quan_log2" : 0
            },
            "DTB-060" : {
                "rsem_quan_log2" : 0
            },
            "DTB-061" : {
                "rsem_quan_log2" : 0
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 5.26838573398781
            },
            "DTB-002" : {
                "rsem_quan_log2" : 7.03820349846649
            },
            "DTB-003" : {
                "rsem_quan_log2" : 5.74501138904009
            },
            "DTB-001" : {
                "rsem_quan_log2" : 7.10185594460954
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 6.05106969576712
            },
            "DTB-046" : {
                "rsem_quan_log2" : 7.65105169117893
            },
            "DTB-008" : {
                "rsem_quan_log2" : 6.67373872796929
            },
            "DTB-009" : {
                "rsem_quan_log2" : 4.74206551325571
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 7.26735975756002
            },
            "DTB-020" : {
                "rsem_quan_log2" : 4.53753835986439
            },
            "DTB-102" : {
                "rsem_quan_log2" : 5.1982701884961
            },
            "DTB-022" : {
                "rsem_quan_log2" : 10.0696103413922
            },
            "DTB-023" : {
                "rsem_quan_log2" : 3.40615567439867
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 5.52974912226046
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 4.40150759746772
            },
            "DTB-089" : {
                "rsem_quan_log2" : 5.61188646720128
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 4.79007866881152
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 3.36894989657821
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 5.22356156096094
            },
            "DTB-080" : {
                "rsem_quan_log2" : 7.79239793199565
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063" : {
                "rsem_quan_log2" : 7.3462140824335
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 7.81764180267423
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 1.51888758686242
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 7.54821773769051
            },
            "DTB-073" : {
                "rsem_quan_log2" : 5.96231071332958
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 8.12767712526901
            },
            "DTB-071" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-059" : {
                "rsem_quan_log2" : 10.7015088583083
            },
            "DTB-156" : {
                "rsem_quan_log2" : 5.72854911484519
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 1.51712448580564
            },
            "DTB-053" : {
                "rsem_quan_log2" : 7.38945237590244
            },
            "DTB-018" : {
                "rsem_quan_log2" : 4.80041848996296
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 5.64974477851997
            },
            "DTB-011" : {
                "rsem_quan_log2" : 4.88823182330932
            },
            "DTB-036" : {
                "rsem_quan_log2" : 5.71154721716312
            },
            "DTB-035" : {
                "rsem_quan_log2" : 5.85345179032467
            },
            "DTB-034" : {
                "rsem_quan_log2" : 3.98654746144563
            },
            "DTB-110" : {
                "rsem_quan_log2" : 6.11795264378478
            },
            "DTB-032" : {
                "rsem_quan_log2" : 6.56605403817109
            },
            "DTB-031" : {
                "rsem_quan_log2" : 6.41797062543449
            },
            "DTB-030" : {
                "rsem_quan_log2" : 7.83745637628252
            },
            "DTB-049" : {
                "rsem_quan_log2" : 8.12868778246505
            },
            "DTB-095" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 7.694317487712
            },
            "DTB-064" : {
                "rsem_quan_log2" : 3.97986986844603
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 3.94643143710372
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "PSMC3IP",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 4.44912552904652
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 3.74983457441273
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 4.01410529940556
            },
            "DTB-132" : {
                "rsem_quan_log2" : 9.00654993488395
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 7.57749151970418
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 2.34104640921859
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 5.4870360800319
            },
            "DTB-131" : {
                "rsem_quan_log2" : 4.87891657661808
            },
            "DTB-124" : {
                "rsem_quan_log2" : 0
            },
            "DTB-060" : {
                "rsem_quan_log2" : 3.32192809488736
            },
            "DTB-061" : {
                "rsem_quan_log2" : 0
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 6.35135447654158
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 7.07672155164221
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 6.74531398335345
            },
            "DTB-046" : {
                "rsem_quan_log2" : 5.27612440527424
            },
            "DTB-008" : {
                "rsem_quan_log2" : 5.91645036995103
            },
            "DTB-009" : {
                "rsem_quan_log2" : 5.49350323658733
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 5.57799371004544
            },
            "DTB-020" : {
                "rsem_quan_log2" : 0
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 3.15608914545751
            },
            "DTB-023" : {
                "rsem_quan_log2" : 6.7997789498399
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 2.74429028635666
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 7.48814622239337
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 5.32596199617185
            },
            "DTB-083" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080" : {
                "rsem_quan_log2" : 4.66361787431498
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 4.35025677787099
            },
            "DTB-063" : {
                "rsem_quan_log2" : 4.76227439319927
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 5.29544753457238
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 3.85561103980599
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 7.12188158704228
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 5.56576775471017
            },
            "DTB-073" : {
                "rsem_quan_log2" : 4.09369538023356
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-071" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-059" : {
                "rsem_quan_log2" : 0
            },
            "DTB-156" : {
                "rsem_quan_log2" : 7.90734196831439
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 5.37901439808996
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 4.5894399227459
            },
            "DTB-118" : {
                "rsem_quan_log2" : 3.51307379448152
            },
            "DTB-038" : {
                "rsem_quan_log2" : 4.84391351597426
            },
            "DTB-011" : {
                "rsem_quan_log2" : 3.41733946543494
            },
            "DTB-036" : {
                "rsem_quan_log2" : 7.56573348825528
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 4.2419011841795
            },
            "DTB-110" : {
                "rsem_quan_log2" : 2.08542465625268
            },
            "DTB-032" : {
                "rsem_quan_log2" : 0
            },
            "DTB-031" : {
                "rsem_quan_log2" : 5.55847581780935
            },
            "DTB-030" : {
                "rsem_quan_log2" : 4.49565679256487
            },
            "DTB-049" : {
                "rsem_quan_log2" : 2.49095514002218
            },
            "DTB-095" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 6.39995889102731
            },
            "DTB-064" : {
                "rsem_quan_log2" : 2.79921167097567
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 4.55479142867299
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }],
    'mutation' : [],
    'clinical' : commonClinicalEventsDocList
};
enzObsDeckSettings["signature"] = {
    'expression' : {
        'object' : [[{
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5da"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.536912044599432,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5db"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.23620597175462,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5dc"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.853657721099026,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5dd"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.22284146806973,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5de"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.80781282069849,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5df"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.970770264708118,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e0"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.659421872848456,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e1"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.908499025395753,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e2"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 3.42388194878816,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e3"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.347426742021474,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e4"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 1.94810231247798,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e5"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 2.17743939100679,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e6"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 1.30262724371726,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e7"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.437954065984909,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e8"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 1.22850514784345,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5e9"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.121322541716488,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5ea"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.777511609070591,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5eb"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.427666833671034,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5ec"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.0984207068039768,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5ed"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.794219241009331,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5ee"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.775310892736323,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5ef"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.22638717048079,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f0"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.507460815181681,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f1"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 2.05448022897711,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f2"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.239550076310197,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f3"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.0736187795066,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f4"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.736770994179346,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f5"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.963025407191367,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f6"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.100761762802105,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f7"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 1.85449382822346,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f8"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.906941482818751,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5f9"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.432455909771696,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5fa"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.470605402091618,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5fb"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.64713741768128,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5fc"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.308154146718322,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5fd"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.188339611674752,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5fe"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.0190866264543621,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a5ff"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.651272444516862,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a600"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.169152489869301,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a601"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.538235059162765,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a602"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.443049074304184,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a603"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.65149851618063,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a604"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.810308982449875,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a605"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.281539350283265,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a606"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 1.16722725232545,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a607"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.127246342589148,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a608"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.0983785959498,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a609"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -2.25423506634606,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a60a"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.92632360101565,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a60b"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : 0.254458850862826,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a60c"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -1.4734687102998,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a60d"
            },
            "name" : "SKI_tf_viper_v5",
            "val" : -0.843326172645918,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a12"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.436315838938793,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a13"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.71447522693164,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a14"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 2.38059488605005,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a15"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.7905179049702,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a16"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 1.15957713232151,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a17"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 0.956767830514735,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a18"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.250530186445151,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a19"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.711827090244586,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a1a"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 2.1000881685963,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a1b"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 0.072278343536626,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a1c"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.961241443284521,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a1d"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 0.564881264508859,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a1e"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.00783740473273,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a1f"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 2.06010271249124,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a20"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 0.589545106897924,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a21"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.16101628892931,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a22"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 0.142943788173216,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a23"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 0.291488874562819,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a24"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.9199811562512,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a25"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 2.39343759776915,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a26"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.642182055853783,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a27"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 2.04080200979653,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a28"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.27547151695956,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a29"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 1.12984316192337,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a2a"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 1.30241063921782,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a2b"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.347090908352188,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a2c"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 1.10270057035802,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a2d"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.72349752380117,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a2e"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.263413011558526,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a2f"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 1.14589667808546,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a30"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 2.16001145865037,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a31"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.407784055011397,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a32"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.63032821621576,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a33"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.13111984574349,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a34"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.7010835630272,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a35"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.67078702158216,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a36"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.36714950044261,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a37"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -3.06921669226859,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a38"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.780870650222855,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a39"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.676822853071788,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a3a"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.206380855443588,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a3b"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -2.0121285390644,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a3c"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.927381515729768,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a3d"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.903502148154659,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a3e"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.13476829669465,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a3f"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.68589367805183,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a40"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.505874385611829,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a41"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : 1.57499498227054,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a42"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -1.00219640808025,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a43"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.603635597364966,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a44"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -3.09853980789234,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109a45"
            },
            "name" : "NR0B1_tf_viper_v5",
            "val" : -0.621603287997105,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da2"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -2.42839831247597,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da3"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.413753334033019,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da4"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 2.09038734884565,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da5"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.59878120418763,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da6"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.22836017767578,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da7"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 2.09502035393717,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da8"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -2.08685794645467,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107da9"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.63075775986777,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107daa"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.96045336279789,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dab"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.598063589166926,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dac"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.746956129220831,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dad"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.01179056672316,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dae"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.410803009546513,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107daf"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.120408568285199,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db0"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.44237889913745,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db1"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.14238037509806,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db2"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.252513091348305,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db3"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.91931558904204,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db4"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -2.45865932081471,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db5"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.986433289496799,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db6"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.444323520035644,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db7"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 1.70193363827172,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db8"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.30340118282116,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107db9"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.431796636918155,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dba"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.11889237992544,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dbb"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.697837771681901,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dbc"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.0314081947940535,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dbd"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.68580066698352,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dbe"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.00947857628207615,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dbf"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.449232562022363,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc0"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.726640061005485,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc1"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.47813435852838,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc2"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.62736129288272,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc3"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.79277049910691,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc4"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.985758687976677,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc5"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.401451803305303,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc6"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.594006856401309,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc7"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.426546850234712,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc8"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.532254135892032,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dc9"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.144479204569128,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dca"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.43119995064195,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dcb"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.81745291387495,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dcc"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.73287708311347,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dcd"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.355819286889711,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dce"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.11971055659564,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dcf"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.89287032279809,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dd0"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.616183330571127,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dd1"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.524338013129409,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dd2"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : 0.859735111741552,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dd3"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -1.36722273709874,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dd4"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.260880517733019,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107dd5"
            },
            "name" : "CRKL_tf_viper_v5",
            "val" : -0.824784051308203,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109392"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.84878977483478,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109393"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.49827813936164,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109394"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.80096362930971,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109395"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.06263094891511,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109396"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.24284078657545,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109397"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.99238317249547,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109398"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -4.25249510062568,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109399"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.51302261882526,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510939a"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.0843393716547,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510939b"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.79523919244809,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510939c"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.59868364939045,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510939d"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.23843068331035,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510939e"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.02819989497885,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510939f"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.91862754897602,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a0"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.56573641287558,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a1"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.39202765910163,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a2"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.19610099485256,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a3"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.37371876879935,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a4"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.84944195889248,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a5"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.23487136234318,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a6"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.96694473207797,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a7"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.24632649201733,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a8"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.84436451812934,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093a9"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.57658455275298,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093aa"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.4390054188872,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093ab"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.24241376131632,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093ac"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.92463661513066,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093ad"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 0.854237016469404,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093ae"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.65424334514497,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093af"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.76143043407943,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b0"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 3.18764228661235,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b1"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -3.31331891388991,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b2"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.24220495034149,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b3"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.8674957359722,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b4"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 2.55753330030164,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b5"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 0.448185630324664,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b6"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 0.846222508611661,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b7"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : 1.09832281097056,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b8"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.05546764921787,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093b9"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.55391137942631,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093ba"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.88036459752676,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093bb"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.23507788228307,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093bc"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.85096705378617,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093bd"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.52235920160459,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093be"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.22742499903467,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093bf"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -0.440234127650928,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093c0"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.65250147488,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093c1"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.04920173848967,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093c2"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -3.59117204664019,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093c3"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -2.41530507131257,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093c4"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -3.23490284321453,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751093c5"
            },
            "name" : "MAFF_tf_viper_v5",
            "val" : -1.55245299592412,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e0a"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 2.2512830306354,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e0b"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.97632948158432,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e0c"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 6.91474774670169,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e0d"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -4.47193980746633,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e0e"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 5.48373979688675,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e0f"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 7.57784488499149,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e10"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -7.5286231767518,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e11"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 3.32538990860571,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e12"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 5.96087471161215,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e13"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 0.754041659858998,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e14"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 1.95202977678294,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e15"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 7.28558867159271,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e16"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -3.4810570534419,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e17"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -0.273091795060414,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e18"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 7.04602073754642,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e19"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.73863088103215,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e1a"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 4.32554161847606,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e1b"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 5.99475103014703,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e1c"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -7.99372928697301,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e1d"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 5.89793155927483,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e1e"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -2.35985980748968,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e1f"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 7.20094274538653,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e20"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 2.29298355766906,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e21"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -0.467468254005133,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e22"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 1.04623011218885,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e23"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -0.38675178341566,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e24"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -2.88230898070817,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e25"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -4.15953353124804,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e26"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 1.01670763277967,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e27"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 2.59412178765681,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e28"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 2.51045875286501,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e29"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.42535057196615,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e2a"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -2.53686617864184,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e2b"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -1.50635928830098,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e2c"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 0.843656120817162,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e2d"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -4.9897971405685,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e2e"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -3.62501283179763,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e2f"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -2.09573197980759,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e30"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -0.783674954150296,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e31"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -2.54715033165735,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e32"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -1.1675803570679,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e33"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -6.20887124043866,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e34"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -8.05128608284346,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e35"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.44847455536274,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e36"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.65220972290613,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e37"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -2.66414499027308,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e38"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -6.295073113346,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e39"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : 0.515973326698203,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e3a"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.16015070209897,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e3b"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -6.4389821934429,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e3c"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.49679297856489,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107e3d"
            },
            "name" : "CTCF_tf_viper_v5",
            "val" : -5.11367008949506,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a53e"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.46939247347683,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a53f"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -0.551480124283441,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a540"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.19109318675514,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a541"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -0.328984913740788,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a542"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 3.4604969126298,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a543"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.36845787716831,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a544"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.97398338401101,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a545"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.21459474433027,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a546"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.01433478268946,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a547"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.0318144548967,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a548"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.58635383865502,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a549"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.96482208251415,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a54a"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.43876294070332,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a54b"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 0.614894536586926,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a54c"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.55151073763197,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a54d"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.46690703558699,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a54e"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 0.850877352131655,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a54f"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.65970910928562,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a550"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.84189643738408,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a551"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 0.872106629960482,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a552"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.56444731641466,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a553"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 3.07848058913336,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a554"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 3.29101228476886,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a555"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.38842822053216,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a556"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.58969357813838,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a557"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -2.49460000406568,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a558"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.60104811320089,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a559"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -0.566960306211817,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a55a"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.13828718023157,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a55b"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.61517130804675,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a55c"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.40115520991169,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a55d"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.47747135622292,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a55e"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.70751168779398,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a55f"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.36766161556662,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a560"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 2.21924688471566,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a561"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 0.901202957486593,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a562"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.19897122398947,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a563"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 1.40439829664313,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a564"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.79490019331493,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a565"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.83909098926686,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a566"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -0.212935151104459,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a567"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : 0.24091714304019,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a568"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -3.39202174038614,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a569"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.66142164637701,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a56a"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.88462281189665,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a56b"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -0.181296774773496,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a56c"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.35813837743245,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a56d"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.03920983099828,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a56e"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.51494306262274,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a56f"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -3.06247615877069,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a570"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -1.85293196662292,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a571"
            },
            "name" : "SIRT6_tf_viper_v5",
            "val" : -3.48954197769197,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f76"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 1.0175628729889,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f77"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.411430945217889,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f78"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.594987934435545,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f79"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 2.16468992614655,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f7a"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.215434658419348,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f7b"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.3265472650539,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f7c"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.89611562148535,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f7d"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.796130685128004,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f7e"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.208748367356833,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f7f"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.746120976292153,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f80"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.185531667720827,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f81"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.53640592728522,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f82"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.0577663002636564,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f83"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.436536492687131,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f84"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 1.30560860092847,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f85"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.631332684135521,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f86"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.00805859461690336,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f87"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 2.46805401374868,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f88"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.3371162982007,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f89"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 3.1516569599521,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f8a"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.965409582600126,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f8b"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.677683879440934,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f8c"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.400488511479342,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f8d"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 1.59100690594629,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f8e"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.736759036044033,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f8f"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.11842394653875,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f90"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.585364531261559,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f91"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 1.41290520622788,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f92"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.94015344826656,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f93"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.502719349368527,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f94"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 1.21088741630583,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f95"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.1987651049228,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f96"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.576424939829598,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f97"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.045580290786779,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f98"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.282081294760894,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f99"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.800565742678092,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f9a"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 2.10617856506991,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f9b"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.196762894384517,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f9c"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.00971687022065,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f9d"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.820807934135606,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f9e"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.958647954620504,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107f9f"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.0410205962470919,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa0"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.90537939267087,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa1"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.717108143709288,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa2"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.461501120982399,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa3"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.685790099594885,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa4"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.40293984733177,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa5"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : 0.796491193441629,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa6"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.171928000171207,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa7"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.800706274347478,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa8"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -1.15885930123025,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fa9"
            },
            "name" : "DHRS2_tf_viper_v5",
            "val" : -0.179829758674485,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510af9a"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.10823212909339,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510af9b"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.42801782208526,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510af9c"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.259321063963867,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510af9d"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.375097352926088,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510af9e"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.28481967679853,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510af9f"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.369590919479817,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa0"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.7329678791081,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa1"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.759549579334684,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa2"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 2.99668717252189,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa3"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.853473124689604,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa4"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.34981830546496,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa5"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.75278324561765,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa6"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.03201993297673,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa7"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 3.92549458401878,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa8"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.880737216750866,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afa9"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.03242373753703,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afaa"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.569906736986128,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afab"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.5001083454517,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afac"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.30849424661387,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afad"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.23401119221291,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afae"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.144575030459499,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afaf"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.09360086014247,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb0"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.904813675689102,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb1"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.44301796283668,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb2"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.60241394895665,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb3"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.913048885621034,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb4"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.1691176948346,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb5"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.558590429803171,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb6"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.70663579899003,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb7"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.05426926154932,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb8"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.96754304737151,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afb9"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.82471245402637,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afba"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.6241720230289,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afbb"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.1088279648388,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afbc"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 1.80401094825898,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afbd"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.134278028975359,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afbe"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.113608768006967,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afbf"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.78564337224163,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc0"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : 0.738145998470558,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc1"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.52753468803262,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc2"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.35390344893614,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc3"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.367098896416829,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc4"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.85706361376344,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc5"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.478366722503206,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc6"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.274105379421214,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc7"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.16896540724942,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc8"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.71382864718119,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afc9"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.26300160782957,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afca"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.2495035111253,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afcb"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.5159396927613,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afcc"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -1.77910363159642,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510afcd"
            },
            "name" : "TSC22D3_tf_viper_v5",
            "val" : -0.734157692578926,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ce"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.5554942755818,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088cf"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -2.94035171387168,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d0"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 2.06650066109419,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d1"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.63373593099782,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d2"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.611252692651713,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d3"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.857995242638195,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d4"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -2.06617871300459,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d5"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.753123327391429,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d6"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 2.78823527308547,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d7"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.601311878276032,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d8"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 2.02772977483555,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088d9"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.319159270712806,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088da"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.962189639132287,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088db"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 3.45327628227639,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088dc"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 1.22872568639371,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088dd"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.9807135348505,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088de"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.560286143996544,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088df"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 1.06387286244583,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e0"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.84270422793048,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e1"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.240794126337528,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e2"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.194405652762871,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e3"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.298389210672734,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e4"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.0179692846985568,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e5"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.30167796486381,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e6"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.16767025059892,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e7"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.20140406802255,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e8"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.13374189256213,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088e9"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.31341578982392,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ea"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.142202570904267,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088eb"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.81123298204308,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ec"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.393552599623536,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ed"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.04563605719031,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ee"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 0.628960889140804,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ef"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.211575842987763,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f0"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.532262107049486,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f1"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.924214524812681,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f2"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.570848226614419,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f3"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.26602847872624,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f4"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 5.33736388962881,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f5"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 3.95991472821904,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f6"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : 4.02884958626104,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f7"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.18676119195646,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f8"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -2.10988628158907,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088f9"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.16231876432391,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088fa"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.0566138963979,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088fb"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -2.20462343728083,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088fc"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.828093189976473,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088fd"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -0.198990273324119,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088fe"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.3605849955786,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751088ff"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.18787008442076,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108900"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -2.42569977129664,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108901"
            },
            "name" : "FOXP3_tf_viper_v5",
            "val" : -1.02696724423766,
            "id" : "DTB-132"
        }]]
    }
};

// TODO abiraterone settings
// abiObsDeckSettings = commonObsDeckSettings;
// abiObsDeckSettings["pivotScores"] = {
// "object" : abiCorrDocList
// };
// abiObsDeckSettings["mongoData"] = {
// 'clinical' : commonClinicalEventsDocList,
// 'expression' : abiExpDocList,
// 'mutation' : abiMutDocList
// };
// abiObsDeckSettings["signature"] = {
// 'expression' : {
// 'object' : [abiSignatureScoresDoclist]
// }
// };

// TODO small cell settings
// smcObsDeckSettings = commonObsDeckSettings;
// abiObsDeckSettings["pivotScores"] = {
// "object" : smcCorrDocList
// };
// smcObsDeckSettings["mongoData"] = {
// 'clinical' : commonClinicalEventsDocList,
// 'expression' : smcExpDocList,
// 'mutation' : smcMutDocList
// };
// abiObsDeckSettings["signature"] = {
// 'expression' : {
// 'object' : [smcSignatureScoresDoclist]
// }
// };

// TODO adeno settings
// adenoObsDeckSettings = commonObsDeckSettings;
// abiObsDeckSettings["pivotScores"] = {
// "object" : adenoCorrDocList
// };
// abiObsDeckSettings["mongoData"] = {
// 'clinical' : commonClinicalEventsDocList,
// 'expression' : adenoExpDocList,
// 'mutation' : adenoMutDocList
// };
// abiObsDeckSettings["signature"] = {
// 'expression' : {
// 'object' : [adenoSignatureScoresDoclist]
// }
// };

/*****************************************************************************/
/* Cohort: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.Cohort.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
    'change #geneset' : function(event, template) {
        // The cookie stores genes required by obs-deck in case they might be missing from the geneset.
        // For example, if user has done sample sorting based on a gene expression, that gene expression data must be present.

        // TODO first, throw away pivot settings
        delete Session.keys['pivotSettings'];
        console.log('SESSION pivotSettings', Session.get('pivotSettings'));

        var cookieGenes = observation_deck.getCookieEvents();
        console.log('cookieGenes', cookieGenes);

        var sourceElem = event.target || event.srcElement;
        var elemValue = sourceElem.value;

        var genesetName = '';
        for (var i = 0; i < sourceElem.length; i++) {
            var option = sourceElem[i];
            if (option.selected) {
                // option element text also contains set size
                genesetName = (option.text);
                var fields = genesetName.split(" (");
                fields.pop();
                genesetName = fields.join();
                break;
            }
        }

        Session.set('geneset', genesetName);
        console.log('SESSION genesetName:', Session.get('geneset'));

        Session.set('geneList', cookieGenes.concat(elemValue.split(',')));
        console.log('SESSION geneset members', Session.get('geneList').length, 'genes', Session.get('geneList'));
    },
    'click .select_geneset' : function() {
        console.log('event: click .select_geneset');
    }
});

Template.Cohort.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
    genesets : function() {
        var genesetsResp = GeneSets.find({}, {
            reactive : true
        });
        var genesetsDocList = genesetsResp.fetch();

        var result = [];
        for (var i = 0; i < genesetsDocList.length; i++) {
            var doc = genesetsDocList[i];
            var name = doc['name'];
            var members = doc['members'];
            result.push({
                'name' : name,
                'members' : members,
                'size' : members.length
            });
        }
        return result;
    },
    selected : function() {
        var geneSetObj = this;
        var sessionGeneSet = Session.get('geneset');
        if (sessionGeneSet === geneSetObj.name) {
            return true;
        } else {
            return false;
        }
    },
});

/*****************************************************************************/
/* Cohort: Lifecycle Hooks */
/*****************************************************************************/
Template.Cohort.created = function() {
};

Template.Cohort.rendered_to_be_fixed = function() {
    var divElem = document.getElementById("Cohort_OD_Div");

    var applyPagingToGeneList = function(scoredGenes) {
        // console.log("scoredGenes", scoredGenes);
        var pagingSessionKey = "subscriptionPaging";
        var pageSize = 5;
        var pagingConfig = Session.get(pagingSessionKey) || {};
        var sortedGenes = scoredGenes.sort(u.sort_by("score"));
        var result = [];

        // setup data structures
        var pagedGenes = [];
        var pagedGenes_anti = [];

        for (var i = 0, length = scoredGenes.length; i < length; i++) {
            var geneObj = scoredGenes[i];
            var name = geneObj["name"];
            var score = geneObj["score"];

            if (score < 0) {
                pagedGenes_anti.unshift(name);
            } else {
                pagedGenes.push(name);
            }
        }

        // get page settings
        var configKey = "expression data";
        var pagingObj;
        if ( configKey in pagingConfig) {
            pagingObj = pagingConfig[configKey];
        } else {
            pagingObj = {
                "head" : 0,
                "tail" : 0
            };
        }

        // apply settings via array.slice
        // pos
        var length = pagedGenes.length;
        var totalPages = Math.ceil(length / pageSize);

        // beware of off-by-one errors
        if (pagingObj["head"] > totalPages - 1) {
            console.log('attempting to pass last page of documents - going back to last page of head', configKey);
            pagingObj["head"] = totalPages - 1;
            if (pagingObj["head"] < 0) {
                pagingObj["head"] = 0;
            }
            Session.set(pagingSessionKey, pagingConfig);
        }

        var skip = (pageSize * pagingObj["head"]);
        pagedGenes = pagedGenes.slice(skip, (skip + pageSize));

        // anti
        var length_anti = pagedGenes_anti.length;
        var totalPages_anti = Math.ceil(length_anti / pageSize);

        // beware of off-by-one errors
        if (pagingObj["tail"] > totalPages_anti - 1) {
            console.log('attempting to pass last page of documents - going back to last page of tail', configKey);
            pagingObj["tail"] = totalPages_anti - 1;
            if (pagingObj["tail"] < 0) {
                pagingObj["tail"] = 0;
            }
            Session.set(pagingSessionKey, pagingConfig);
        }

        var skip_anti = (pageSize * pagingObj["tail"]);
        pagedGenes_anti = pagedGenes_anti.slice(skip_anti, (skip_anti + pageSize));

        // cat arrays for return
        var cookieGenes = observation_deck.getCookieEvents();
        console.log("cookieGenes", cookieGenes);
        result = result.concat(pagedGenes, pagedGenes_anti, cookieGenes);

        console.log('pages', totalPages, totalPages_anti, configKey);

        return result;
    };

    var applyPagingToSignatureNames = function(scoredSigs) {
        // console.log("scoredSigs", scoredSigs);
        var pagingSessionKey = "subscriptionPaging";
        var pageSize = 5;
        var pagingConfig = Session.get(pagingSessionKey) || {};
        var sortedSigs = scoredSigs.sort(u.sort_by("score"));
        var signatureDatatypes = ["expression signature", "kinase target activity", "tf target activity"];
        var result = [];

        // setup data structure
        var pagedSignatures = {};
        var pagedSignatures_anti = {};

        for (var i = 0, length = signatureDatatypes.length; i < length; i++) {
            var datatype = signatureDatatypes[i];
            pagedSignatures[datatype] = [];
            pagedSignatures_anti[datatype] = [];
        }

        // populate data structure by name parsing
        for (var i = 0, length = scoredSigs.length; i < length; i++) {
            var sigObj = scoredSigs[i];
            var name = sigObj["name"];
            var score = sigObj["score"];

            // remove version number from name
            fields = name.split("_v");
            fields.pop();
            var rootName = fields.join("_v");

            var datatype;
            if ((u.endsWith(rootName, "_tf_viper")) || (u.beginsWith(rootName, "tf_viper_"))) {
                datatype = "tf target activity";
            } else if (u.endsWith(rootName, "_kinase_viper")) {
                datatype = "kinase target activity";
            } else {
                datatype = "expression signature";
            }

            if (score < 0) {
                // add to front
                pagedSignatures_anti[datatype].unshift(name);
            } else {
                // add to back
                pagedSignatures[datatype].push(name);
            }

            // console.log("name", name, "score", score, "datatype", datatype);
        }

        // get page settings from session
        for (var datatype in pagedSignatures) {
            var configKey = datatype;
            var pagingObj;
            if ( configKey in pagingConfig) {
                pagingObj = pagingConfig[configKey];
            } else {
                pagingObj = {
                    "head" : 0,
                    "tail" : 0
                };
            }
            // apply settings via array.slice
            // pos
            var length = pagedSignatures[datatype].length;
            var totalPages = Math.ceil(length / pageSize);

            // beware of off-by-one errors
            if (pagingObj["head"] > totalPages - 1) {
                console.log('attempting to pass last page of documents - going back to last page of head', datatype);
                pagingObj["head"] = totalPages - 1;
                if (pagingObj["head"] < 0) {
                    pagingObj["head"] = 0;
                }
                Session.set(pagingSessionKey, pagingConfig);
            }

            var skip = (pageSize * pagingObj["head"]);
            pagedSignatures[datatype] = pagedSignatures[datatype].slice(skip, (skip + pageSize));

            // anti
            var length_anti = pagedSignatures_anti[datatype].length;
            var totalPages_anti = Math.ceil(length_anti / pageSize);

            // beware of off-by-one errors
            if (pagingObj["tail"] > totalPages_anti - 1) {
                console.log('attempting to pass last page of documents - going back to last page of tail', datatype);
                pagingObj["tail"] = totalPages_anti - 1;
                if (pagingObj["tail"] < 0) {
                    pagingObj["tail"] = 0;
                }
                Session.set(pagingSessionKey, pagingConfig);
            }

            var skip_anti = (pageSize * pagingObj["tail"]);
            pagedSignatures_anti[datatype] = pagedSignatures_anti[datatype].slice(skip_anti, (skip_anti + pageSize));

            // cat arrays for return
            result = result.concat(pagedSignatures[datatype], pagedSignatures_anti[datatype]);

            console.log('pages', totalPages, totalPages_anti, datatype);
        }

        // console.log('pagedSignatures', pagedSignatures);
        // console.log('pagedSignatures_anti', pagedSignatures_anti);

        return result;
    };

    // Deps.autorun is triggered when reactive data source has changed
    Deps.autorun(function() {
        var s = ' <-- Deps.autorun in cohort.js';
        // console.log('Deps.autorun');

        // TODO getting default signature for a contrast
        var contrastId = Session.get('selectedContrast');
        console.log('contrastId', contrastId, s);
        if (contrastId) {
            var contResp = Contrast.findOne({
                "_id" : contrastId
            });
            console.log('contResp', contResp, s);

            // TODO get the default sig.
        } else {
            console.log('NO CONTRAST ID', s);
        }

        // pivoting with correlator
        var corrResp = Correlator.find({}, {
            // sort : {
            // score : -1
            // },
            reactive : true
        });
        var corrDocList = corrResp.fetch();
        console.log('corrDocList.length:', corrDocList.length, s);

        var geneList = [];
        var signatureNames = Session.get("signatureNames") || [];
        var pivotSettings = Session.get('pivotSettings');
        if (pivotSettings) {
            console.log('pivotSettings', pivotSettings, s);
            var pName = pivotSettings['name'];
            var pDatatype = pivotSettings['datatype'];
            var pVersion = pivotSettings['version'];

            geneList = [];
            signatureNames = [pName + "_v" + pVersion];

            var scoredGenes = [];
            var scoredSigs = [{
                "name" : pName + "_v" + pVersion,
                "score" : 1
            }];
            for (var i = 0; i < corrDocList.length; i++) {
                var doc = corrDocList[i];
                if ((doc['name_1'] === pName) && (doc['datatype_1'] === pDatatype) && ("" + doc['version_1'] === "" + pVersion)) {
                    // matched pivot event

                    var name2 = doc["name_2"];
                    var datatype2 = doc["datatype_2"];
                    var version2 = doc["version_2"];
                    var score = doc["score"];

                    // TODO hack for mismatched version numbers between mongo collections
                    if (u.endsWith(name2, "_tf_viper")) {
                        version2 = "4";
                    }

                    if (datatype2 === 'signature') {
                        // matched event is a signature
                        var name = name2 + "_v" + version2;
                        signatureNames.push(name);

                        var eventScoreObj = {
                            "name" : name,
                            "score" : score
                        };
                        scoredSigs.push(eventScoreObj);
                        // } else if (u.endsWith(name2, "_tf_viper")) {
                        // // matched event is a signature
                        // var name = name2.replace("_tf_viper", "");
                        // name = "tf_viper_" + name;
                        // name = name + "_v" + "4";
                        // signatureNames.push(name);
                        //
                        // var eventScoreObj = {
                        // "name" : name,
                        // "score" : score
                        // };
                        // scoredSigs.push(eventScoreObj);
                    } else if (datatype2 === 'expression') {
                        // matched event is a gene
                        var name = name2;
                        geneList.push(name);

                        var eventScoreObj = {
                            "name" : name,
                            "score" : score
                        };
                        scoredGenes.push(eventScoreObj);
                    }
                }
            }

            // TODO paging of ["kinase target activity","tf target activity","expression signature"]
            signatureNames = applyPagingToSignatureNames(scoredSigs);

            geneList = applyPagingToGeneList(scoredGenes);

            console.log('geneList', geneList, s);
            console.log('signatureNames', signatureNames, s);

            Session.set('geneset', 'from pivotSettings');
            Session.set('geneList', geneList);
            Session.set('signatureNames', signatureNames);

        } else {
            console.log('NO PIVOTSETTINGS FROM SESSION', pivotSettings, s);

            // when this is empty, no pivot data is sent to obs-deck
            corrDocList = [];

            Session.set('signatureNames', ['MAP3K8_kinase_viper_v4', 'AURKB_kinase_viper_v4']);
        }

        // get clinical data
        var clinResp = ClinicalEvents.find({}, {
            reactive : true
        });
        var clinDocList = clinResp.fetch();
        console.log('clinDocList.length:', clinDocList.length, s);

        // get expression data
        var expResp = Expression2.find({}, {
            reactive : true
        });
        var expDocList = expResp.fetch();
        console.log('expDocList.length:', expDocList.length, s);

        // TODO get mutation data
        var mutResp = Mutations.find({}, {
            "reactive" : true
        });
        var mutDocList = mutResp.fetch();
        console.log('mutDocList.length:', mutDocList.length, s);

        // get signature gene:weight vectors + metadata
        var signatureScoresResp = SignatureScores.find({
        }, {
            reactive : true
        });
        var signatureScoresDoclist = signatureScoresResp.fetch();
        console.log('signatureScoresDoclist.length:', signatureScoresDoclist.length, s);

        // signature indexes
        var sigIdxResp = Signature.find({}, {
            reactive : true
        });
        var sigIdsDocList = sigIdxResp.fetch();
        console.log('sigIdsDocList.length:', sigIdsDocList.length, s);

        // build observation deck
        if ((clinDocList.length > 0) || (expDocList.length > 0)) {
            od_config = observation_deck.buildObservationDeck(divElem, {
                // gene query service -> http://localhost:3000/genes?q=MAPK
                "geneQueryUrl" : "/genes?q=",
                "sigQueryUrl" : "/signatures?q=",
                'pivotScores' : {
                    'object' : corrDocList
                },
                'mongoData' : {
                    'clinical' : clinDocList,
                    'expression' : expDocList,
                    'mutation' : mutDocList
                },
                'signature' : {
                    'expression' : {
                        'object' : [signatureScoresDoclist]
                    }
                },
                'signature_index' : {
                    'expression' : {
                        'object' : sigIdsDocList
                    }
                },
                "rowTitleCallback" : function(eventId, config) {
                    var eventObj = config['eventAlbum'].getEvent(eventId);
                    var datatype = eventObj.metadata['datatype'];
                    console.log(eventId, datatype);
                    if (datatype === 'expression data') {
                        // mRNA url: /wb/gene/<gene name>
                        var gene = eventId.replace('_mRNA', '');
                        var url = '/wb/gene/' + gene;
                        window.open(url, "_self");
                    } else if (datatype === 'mutation call') {
                        // mRNA url: /wb/gene/<gene name>
                        var gene = eventId.replace('_mutation', '');
                        var url = '/wb/gene/' + gene;
                        window.open(url, "_self");
                    } else if (datatype === 'clinical data') {
                        // clinical url: /wb/clinical/<name>
                        var feature = eventId;
                        var url = '/wb/clinical/' + feature;
                        window.open(url, "_self");
                    } else if (datatype === "kinase target activity" || datatype === "tf target activity" || datatype === "expression signature") {
                        // signature url: /wb/signature/<sigName>
                        var sigName = eventId;
                        var url = "/wb/signature/" + sigName;
                        window.open(url, "_self");
                    }
                },
                "columnTitleCallback" : function(sampleId, config) {
                    var url = '/wb/patient/' + sampleId;
                    window.open(url, "_self");
                }
            });
        } else {
            // remove child elements of divElem
            while (divElem.firstChild) {
                divElem.removeChild(divElem.firstChild);
            }
            divElem.innerHTML = 'no data';
        }

    });
};

Template.Cohort.destroyed = function() {
};

Template.Cohort.rendered = function() {
    console.log("Template.Cohort.rendered");

    var divElem = document.getElementById("Cohort_OD_Div");

    Deps.autorun(function() {
        console.log("Deps.autorun in Template.Cohort.rendered");
        var hardPivot = Session.get("hardPivot");

        od_config = observation_deck.buildObservationDeck(divElem, enzObsDeckSettings);
    });
};

