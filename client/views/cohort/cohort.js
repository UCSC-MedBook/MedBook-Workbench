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

abiObsDeckSettings = commonObsDeckSettings;
abiObsDeckSettings["pivotScores"] = {
    "object" : [{
        "name_2" : "ATF1_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.61327173666"
    }, {
        "name_2" : "POU1F1_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.52782668689"
    }, {
        "name_2" : "NANOG_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.5071238569"
    }, {
        "name_2" : "MAPK11_kinase_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.43769116112"
    }, {
        "name_2" : "E2F3_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.4296150114"
    }, {
        "name_2" : "FOXA2_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.35995903448"
    }, {
        "name_2" : "SP1_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.35617268074"
    }, {
        "name_2" : "PRKCB_kinase_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.34494286411"
    }, {
        "name_2" : "MEIS1_tf_viper",
        "name_1" : "Abiraterone",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.31002532902"
    }, {
        "name_2" : "MN1",
        "name_1" : "Abiraterone",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.45688078813"
    }, {
        "name_2" : "C19orf26",
        "name_1" : "Abiraterone",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.1441707611"
    }, {
        "name_2" : "PBX4",
        "name_1" : "Abiraterone",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.03739019532"
    }, {
        "name_2" : "ZNF22",
        "name_1" : "Abiraterone",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.93434394878"
    }, {
        "name_2" : "CCNY",
        "name_1" : "Abiraterone",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.91233881477"
    }]

};
abiObsDeckSettings["mongoData"] = {
    'clinical' : commonClinicalEventsDocList,
    'expression' : [{
        "Study_ID" : "prad_wcdt",
        "gene" : "MN1",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 3.32712684587516
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 3.38322043336566
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-132" : {
                "rsem_quan_log2" : 3.31413093634667
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 4.09648114223273
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 4.9656919492247
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 8.39231742277876
            },
            "DTB-131" : {
                "rsem_quan_log2" : 5.12258575697291
            },
            "DTB-124" : {
                "rsem_quan_log2" : 8.33947904008163
            },
            "DTB-060" : {
                "rsem_quan_log2" : 3.22238726884496
            },
            "DTB-061" : {
                "rsem_quan_log2" : 5.87509933961151
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 9.70349613620231
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 3.48978696063896
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 6.21857582868959
            },
            "DTB-046" : {
                "rsem_quan_log2" : 4.70043971814109
            },
            "DTB-008" : {
                "rsem_quan_log2" : 8.30015896764049
            },
            "DTB-009" : {
                "rsem_quan_log2" : 5.43144244440694
            },
            "DTB-121" : {
                "rsem_quan_log2" : 6.64635853695625
            },
            "DTB-120" : {
                "rsem_quan_log2" : 8.19730025394629
            },
            "DTB-020" : {
                "rsem_quan_log2" : 6.74390133324699
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 7.48312327866534
            },
            "DTB-023" : {
                "rsem_quan_log2" : 6.13192690776359
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 6.68222072656808
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 6.36522184904634
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 5.50603062055005
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 0
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 4.26166620258579
            },
            "DTB-080" : {
                "rsem_quan_log2" : 2.98123161291209
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063" : {
                "rsem_quan_log2" : 6.69083889086008
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 7.90027330967547
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 6.05090432469669
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 5.06635617199915
            },
            "DTB-073" : {
                "rsem_quan_log2" : 3.73008559370039
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-071" : {
                "rsem_quan_log2" : 4.21287278647526
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-059" : {
                "rsem_quan_log2" : 0
            },
            "DTB-156" : {
                "rsem_quan_log2" : 5.47094677432148
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 7.08032082465174
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 5.64974477851997
            },
            "DTB-011" : {
                "rsem_quan_log2" : 6.53710189287005
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 4.5684760362018
            },
            "DTB-034" : {
                "rsem_quan_log2" : 3.4463885811617
            },
            "DTB-110" : {
                "rsem_quan_log2" : 0
            },
            "DTB-032" : {
                "rsem_quan_log2" : 7.55842071326866
            },
            "DTB-031" : {
                "rsem_quan_log2" : 6.00854739440416
            },
            "DTB-030" : {
                "rsem_quan_log2" : 5.58585489222255
            },
            "DTB-049" : {
                "rsem_quan_log2" : 3.16480236519728
            },
            "DTB-095" : {
                "rsem_quan_log2" : 3.97323471144197
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 5.62378494141134
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 1.20826752896869
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "C19orf26",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-132" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 3.27393356926689
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-131" : {
                "rsem_quan_log2" : 0
            },
            "DTB-124" : {
                "rsem_quan_log2" : 0
            },
            "DTB-060" : {
                "rsem_quan_log2" : 4.14296067590559
            },
            "DTB-061" : {
                "rsem_quan_log2" : 0
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 0
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 3.72736504617899
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 0
            },
            "DTB-009" : {
                "rsem_quan_log2" : 0
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 2.96397343199841
            },
            "DTB-020" : {
                "rsem_quan_log2" : 0
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 4.27834909333534
            },
            "DTB-023" : {
                "rsem_quan_log2" : 1.54606718045021
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 1.35343621786178
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063" : {
                "rsem_quan_log2" : 4.1294231576565
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 3.42390082530867
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 2.44174904700924
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 0
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073" : {
                "rsem_quan_log2" : 0
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-071" : {
                "rsem_quan_log2" : 4.77166377086603
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-059" : {
                "rsem_quan_log2" : 0
            },
            "DTB-156" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 0
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 0
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 0
            },
            "DTB-110" : {
                "rsem_quan_log2" : 1.99139032524814
            },
            "DTB-032" : {
                "rsem_quan_log2" : 0
            },
            "DTB-031" : {
                "rsem_quan_log2" : 3.91499497171832
            },
            "DTB-030" : {
                "rsem_quan_log2" : 0
            },
            "DTB-049" : {
                "rsem_quan_log2" : 0
            },
            "DTB-095" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 1.3842156242818
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "PBX4",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 2.81231338423505
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 2.86578027751279
            },
            "DTB-132" : {
                "rsem_quan_log2" : 5.51509109753977
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 2.23783901553078
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-131" : {
                "rsem_quan_log2" : 0
            },
            "DTB-124" : {
                "rsem_quan_log2" : 5.4150386263839
            },
            "DTB-060" : {
                "rsem_quan_log2" : 0
            },
            "DTB-061" : {
                "rsem_quan_log2" : 5.30237389132976
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 3.87301585460937
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 5.85841622538865
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 4.47745715083959
            },
            "DTB-040" : {
                "rsem_quan_log2" : 4.4200915940091
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 4.82387161741956
            },
            "DTB-009" : {
                "rsem_quan_log2" : 3.37402397297041
            },
            "DTB-121" : {
                "rsem_quan_log2" : 7.05779032688086
            },
            "DTB-120" : {
                "rsem_quan_log2" : 5.2635978485439
            },
            "DTB-020" : {
                "rsem_quan_log2" : 3.44324858529733
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 2.83491342970104
            },
            "DTB-023" : {
                "rsem_quan_log2" : 4.69838518989853
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 2.94699280432992
            },
            "DTB-089" : {
                "rsem_quan_log2" : 4.33354538442796
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 4.60455174654002
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 2.47131754424631
            },
            "DTB-080" : {
                "rsem_quan_log2" : 2.98123161291209
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 3.26614186798577
            },
            "DTB-063" : {
                "rsem_quan_log2" : 4.3786503372619
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 1.77951188100706
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 5.06644659003068
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 3.99325770415192
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 1.98371417198763
            },
            "DTB-073" : {
                "rsem_quan_log2" : 0
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-071" : {
                "rsem_quan_log2" : 3.28863909997006
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 4.12046806799683
            },
            "DTB-059" : {
                "rsem_quan_log2" : 3.05298965825274
            },
            "DTB-156" : {
                "rsem_quan_log2" : 5.64768578591181
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 3.36611235243137
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 3.31545029998493
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 0
            },
            "DTB-036" : {
                "rsem_quan_log2" : 4.29950843407423
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 5.34354995273888
            },
            "DTB-110" : {
                "rsem_quan_log2" : 1.99139032524814
            },
            "DTB-032" : {
                "rsem_quan_log2" : 6.15608307628868
            },
            "DTB-031" : {
                "rsem_quan_log2" : 4.86636402209807
            },
            "DTB-030" : {
                "rsem_quan_log2" : 0
            },
            "DTB-049" : {
                "rsem_quan_log2" : 0
            },
            "DTB-095" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 4.65275034344123
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 2.64212391615349
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "ZNF22",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 9.45078895872524
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 8.79508994133018
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 9.48780205708885
            },
            "DTB-132" : {
                "rsem_quan_log2" : 10.8059282674203
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 9.0121688937131
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 9.96809795397936
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 8.37068740680722
            },
            "DTB-131" : {
                "rsem_quan_log2" : 8.96300557661121
            },
            "DTB-124" : {
                "rsem_quan_log2" : 8.69392248808101
            },
            "DTB-060" : {
                "rsem_quan_log2" : 9.51339856080957
            },
            "DTB-061" : {
                "rsem_quan_log2" : 8.50581155391959
            },
            "DTB-004" : {
                "rsem_quan_log2" : 9.62657365297726
            },
            "DTB-005" : {
                "rsem_quan_log2" : 9.37252338598906
            },
            "DTB-002" : {
                "rsem_quan_log2" : 9.58855162056948
            },
            "DTB-003" : {
                "rsem_quan_log2" : 11.0140123080423
            },
            "DTB-001" : {
                "rsem_quan_log2" : 9.14117832672166
            },
            "DTB-069" : {
                "rsem_quan_log2" : 8.66268724346009
            },
            "DTB-040" : {
                "rsem_quan_log2" : 10.0612196915995
            },
            "DTB-046" : {
                "rsem_quan_log2" : 9.34651373316563
            },
            "DTB-008" : {
                "rsem_quan_log2" : 10.1413603651745
            },
            "DTB-009" : {
                "rsem_quan_log2" : 9.00994979306521
            },
            "DTB-121" : {
                "rsem_quan_log2" : 10.3789217663255
            },
            "DTB-120" : {
                "rsem_quan_log2" : 10.2281806377654
            },
            "DTB-020" : {
                "rsem_quan_log2" : 8.57468850557646
            },
            "DTB-102" : {
                "rsem_quan_log2" : 5.91943066520887
            },
            "DTB-022" : {
                "rsem_quan_log2" : 9.99272991609702
            },
            "DTB-023" : {
                "rsem_quan_log2" : 8.83319149327092
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 6.21812824316689
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 9.17370236763242
            },
            "DTB-089" : {
                "rsem_quan_log2" : 8.81333965897665
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 8.11072967577501
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 3.74864370521173
            },
            "DTB-085" : {
                "rsem_quan_log2" : 6.75679513966977
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 4.59490679026094
            },
            "DTB-083" : {
                "rsem_quan_log2" : 9.67001246879349
            },
            "DTB-080" : {
                "rsem_quan_log2" : 10.8632517280344
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 4.1891445533126
            },
            "DTB-063" : {
                "rsem_quan_log2" : 9.29157731391378
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 10.1636952076081
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 9.66136606935679
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 9.58089958098717
            },
            "DTB-073" : {
                "rsem_quan_log2" : 9.17368488061965
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 6.63460343232429
            },
            "DTB-071" : {
                "rsem_quan_log2" : 8.56297885036873
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 6.27617466603242
            },
            "DTB-059" : {
                "rsem_quan_log2" : 8.36399103512111
            },
            "DTB-156" : {
                "rsem_quan_log2" : 9.46121912478089
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-053" : {
                "rsem_quan_log2" : 7.65105169117893
            },
            "DTB-018" : {
                "rsem_quan_log2" : 9.19457318223595
            },
            "DTB-118" : {
                "rsem_quan_log2" : 9.91475883894186
            },
            "DTB-038" : {
                "rsem_quan_log2" : 8.68312691241327
            },
            "DTB-011" : {
                "rsem_quan_log2" : 10.8839337144888
            },
            "DTB-036" : {
                "rsem_quan_log2" : 10.2807599846692
            },
            "DTB-035" : {
                "rsem_quan_log2" : 8.59754458210838
            },
            "DTB-034" : {
                "rsem_quan_log2" : 7.2711389687422
            },
            "DTB-110" : {
                "rsem_quan_log2" : 9.15839939030367
            },
            "DTB-032" : {
                "rsem_quan_log2" : 7.97154355395077
            },
            "DTB-031" : {
                "rsem_quan_log2" : 9.39771976325107
            },
            "DTB-030" : {
                "rsem_quan_log2" : 9.61697644299848
            },
            "DTB-049" : {
                "rsem_quan_log2" : 7.85845165978665
            },
            "DTB-095" : {
                "rsem_quan_log2" : 7.31634851650205
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 8.79868434197419
            },
            "DTB-064" : {
                "rsem_quan_log2" : 7.20844507642725
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 9.21921620607056
            },
            "DTB-065" : {
                "rsem_quan_log2" : 7.08337720484273
            }
        }
    }],
    'mutation' : []

};
abiObsDeckSettings["signature"] = {
    'expression' : {
        'object' : [[{
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107826"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.260881130194258,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107827"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.452461265210678,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107828"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.482864353664485,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107829"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.933725564018653,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510782a"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.858732562953797,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510782b"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 1.10914918744928,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510782c"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.57264628591092,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510782d"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.313581565276116,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510782e"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 2.43357122384407,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510782f"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.854562414610579,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107830"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.686695352788549,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107831"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 1.75194963325769,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107832"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.50548907768443,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107833"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.07813858658351,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107834"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.34463094466734,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107835"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.170421410749363,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107836"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.237298680429953,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107837"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.284788256664461,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107838"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.95254987359629,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107839"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.207244679024026,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510783a"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.23458594902813,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510783b"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.153331610255027,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510783c"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.271701293994477,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510783d"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.433367646034421,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510783e"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.10043535714004,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510783f"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.397434337519964,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107840"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.529475526942287,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107841"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.00467111832670657,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107842"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.69537175244399,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107843"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.217181733598993,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107844"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.99100303499566,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107845"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.57346199090424,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107846"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 2.16872968614724,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107847"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.458981481787879,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107848"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.453649125583175,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107849"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.950073495309987,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510784a"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.61632677294196,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510784b"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.27137758576998,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510784c"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.980455458901731,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510784d"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.328921337791022,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510784e"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.361058049266662,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510784f"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.931092336453803,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107850"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.71074930708321,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107851"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.206189160746548,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107852"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.599264752129458,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107853"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.1321109600371,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107854"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.791313590558727,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107855"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -1.36701739053659,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107856"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 1.13991061109362,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107857"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.347911041131773,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107858"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : -0.765445392508685,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107859"
            },
            "name" : "ATF1_tf_viper_v5",
            "val" : 0.386916109552186,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f5a"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.112335116510078,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f5b"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.763290630902639,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f5c"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.417110721333241,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f5d"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.497414354611621,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f5e"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 1.70377452552952,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f5f"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.0594539155009217,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f60"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.226385881599381,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f61"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.28140430851474,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f62"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.83936271354246,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f63"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.137387925665619,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f64"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 2.41426206425427,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f65"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 2.02567668025826,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f66"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -1.06011247299674,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f67"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.99193919212467,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f68"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 1.12933301459206,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f69"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.143948723126836,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f6a"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.0252147342187869,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f6b"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.00536453614938592,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f6c"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.0326986867243988,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f6d"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.24956125498207,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f6e"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.207632731292277,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f6f"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.495538629811723,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f70"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.148221881425618,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f71"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.805161737486314,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f72"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.170972458034569,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f73"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.697389977096017,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f74"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.195099399156157,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f75"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.0551653251813152,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f76"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 1.01844495620751,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f77"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.462978489730472,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f78"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.0273598760027818,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f79"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.418100907676276,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f7a"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.261828017042872,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f7b"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.331796063786539,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f7c"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.561022159731127,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f7d"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.120249073220357,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f7e"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.190379328123427,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f7f"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.0498856370864394,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f80"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.0861692195735436,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f81"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.635834522993393,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f82"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.519314275711772,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f83"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.456211374743344,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f84"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.240402365467483,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f85"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.76608562218679,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f86"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.144380593239939,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f87"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.338120548232489,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f88"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.247024910756525,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f89"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -1.51133340083812,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f8a"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : -0.781300882894802,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f8b"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.417630278477557,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f8c"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.0597272967582596,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109f8d"
            },
            "name" : "POU1F1_tf_viper_v5",
            "val" : 0.0923423232957806,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510973a"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.680114378015464,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510973b"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.4081586743718,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510973c"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.552277076511861,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510973d"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.828471845521215,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510973e"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.74767059675864,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510973f"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.49672283758454,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109740"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.69391182326391,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109741"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 2.62734284507775,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109742"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.45467439472975,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109743"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.355688815548062,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109744"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.581327751550799,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109745"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 2.2679751245022,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109746"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.8162854021429,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109747"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.822356342789466,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109748"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.44054061922043,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109749"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.854090711491151,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510974a"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.555121273624374,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510974b"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.715110261617839,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510974c"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.732304797592572,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510974d"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.10805430011383,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510974e"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.553883548499644,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510974f"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.59503281240994,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109750"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.594157708047061,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109751"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.5568289487741,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109752"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.779246891308971,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109753"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.82467920076662,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109754"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.91557672966127,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109755"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 1.10747603758514,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109756"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.244705466215392,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109757"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.881162717182219,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109758"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.59245802732277,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109759"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.47803132825734,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510975a"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.98454718900404,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510975b"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.143526732376863,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510975c"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.572099233355671,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510975d"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.54886521898334,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510975e"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.839721345383084,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510975f"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.55950777966441,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109760"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.651615499722973,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109761"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.768303851902225,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109762"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.731565589929553,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109763"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.884452118382432,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109764"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.01514915498767,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109765"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.54095669149858,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109766"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.96441155468883,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109767"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.650651054717775,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109768"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -1.00961589393106,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109769"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.541634409944133,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510976a"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.212134207426871,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510976b"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : -0.176649239639488,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510976c"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.316150688297462,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510976d"
            },
            "name" : "NANOG_tf_viper_v5",
            "val" : 0.11031035899448,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd2"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.603294997863626,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd3"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.699200890445709,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd4"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 1.98856899343156,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd5"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.262122864107873,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd6"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.000327491952138032,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd7"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.10059280031812,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd8"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.64996867829772,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fd9"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.643787846563399,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fda"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.00676448586373187,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fdb"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.444339043490673,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fdc"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.133024863604242,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fdd"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.102625426366432,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fde"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.0785215660937107,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fdf"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.433415238803159,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe0"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.610694642278618,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe1"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -1.24969558378617,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe2"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.578706016478173,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe3"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.46837746036347,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe4"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.355552734638728,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe5"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 1.20342819882092,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe6"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.983580677979315,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe7"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.39342911840214,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe8"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.255633209231849,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fe9"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.454364855405779,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fea"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.441004280795092,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106feb"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.222971260661368,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fec"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.969000560979772,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fed"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.974829868541139,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fee"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.483310622910461,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fef"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.0311949660054059,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff0"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.440596541855426,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff1"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.451031029273546,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff2"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 1.19510931351162,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff3"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -1.20581230945024,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff4"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -1.55584470172267,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff5"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.360784733719545,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff6"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -1.03302897049182,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff7"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.657722119274589,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff8"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.0615019978302465,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ff9"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.577764748688582,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ffa"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.0220006192685439,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ffb"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.821197717850997,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ffc"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.807838019956349,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ffd"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.489040694302162,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106ffe"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.443596593575556,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75106fff"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.131860566985285,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107000"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.574394452963829,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107001"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : 0.581064716677688,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107002"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.794901957055322,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107003"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.901860163334605,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107004"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -1.08487787496555,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107005"
            },
            "name" : "MAPK11_kinase_viper_v5",
            "val" : -0.486751576603568,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510807a"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.0959478353103388,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510807b"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.995850532882755,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510807c"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 2.33171961583245,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510807d"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.193643567262273,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510807e"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.14614259897947,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510807f"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.412180364412286,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108080"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.473734274882208,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108081"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.844655897039404,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108082"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.96213151817061,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108083"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.552573889348853,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108084"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.760824481974067,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108085"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.36331093236179,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108086"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.263952180280663,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108087"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.357503821158308,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108088"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.824321622041352,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108089"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.946143044355307,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510808a"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.821079785869889,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510808b"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.83657251086361,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510808c"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.46362089370742,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510808d"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 2.40239532297989,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510808e"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.512407898018306,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510808f"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.30194313189333,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108090"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.217834421586292,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108091"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.8014174954544,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108092"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.474309109068831,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108093"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.631806061023818,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108094"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.18328873427702,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108095"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.725179867587878,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108096"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.595883370897552,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108097"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.496137354733392,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108098"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.24210314122306,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108099"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.813718663975032,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510809a"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.0269190989801869,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510809b"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.107127238540264,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510809c"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.361472010425019,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510809d"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.17057616324632,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510809e"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.680629743144599,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510809f"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.0231595324047,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a0"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.263055745986745,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a1"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.392293062895855,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a2"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.156302958926574,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a3"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.43467580299797,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a4"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -2.00306836942299,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a5"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.60251957589301,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a6"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.05880570565643,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a7"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 0.182793527832478,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a8"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.09614861887742,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080a9"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -1.38585797180507,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080aa"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -2.66702313941163,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080ab"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.460432280233582,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080ac"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : 1.3799676309023,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751080ad"
            },
            "name" : "E2F3_tf_viper_v5",
            "val" : -0.143455498864549,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751086fa"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 0.627506526521104,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751086fb"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.29241186147577,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751086fc"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 3.05010975787322,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751086fd"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.201859952794613,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751086fe"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 0.67649505988489,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751086ff"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.49788073146179,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108700"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 4.72411094737838,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108701"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.00754092219229,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108702"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.18335115334973,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108703"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 2.16300048109437,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108704"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.25149156378324,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108705"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.4593581045456,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108706"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 3.76886900442258,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108707"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 4.16387109454354,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108708"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 1.92837041288535,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108709"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.08499762758356,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510870a"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 1.61260917275556,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510870b"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.301717577593077,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510870c"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.607659459936097,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510870d"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 2.84253264220063,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510870e"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.342854638551609,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510870f"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 2.56240395326073,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108710"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.900650489106092,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108711"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 7.99904299719888,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108712"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 0.785996540149206,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108713"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.88940620516913,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108714"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 6.50315324322641,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108715"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.909969318878333,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108716"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 5.36653746256734,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108717"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 2.62257931207117,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108718"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 2.11543047444638,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108719"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.341896046308545,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510871a"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 1.88748659844663,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510871b"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.81580047557429,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510871c"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.90139555199379,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510871d"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.34670683863066,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510871e"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.47117573265108,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510871f"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.75087727311139,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108720"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.56282051645608,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108721"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.34167400071688,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108722"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.3723175356706,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108723"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.76267169847856,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108724"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.4980465013527,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108725"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.05025089790571,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108726"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 0.836089745192258,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108727"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 0.83446408495325,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108728"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -0.681794921543048,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108729"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : 3.72903079026946,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510872a"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.74575776098458,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510872b"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -1.27060135314127,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510872c"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -3.23094922776233,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510872d"
            },
            "name" : "FOXA2_tf_viper_v5",
            "val" : -2.73101593991082,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a91a"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.42279501018333,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a91b"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.774503071288698,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a91c"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.637602854323757,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a91d"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -4.33134074509113,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a91e"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.811432946619441,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a91f"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 2.05328264493273,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a920"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -5.17570661265628,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a921"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 2.22145786310702,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a922"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.44537672357073,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a923"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -1.44708795687377,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a924"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.210570594492757,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a925"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 4.71510913368967,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a926"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -3.42012675353523,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a927"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.587674560822625,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a928"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.88386869730632,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a929"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -2.34736949116868,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a92a"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -2.36073097140982,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a92b"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 3.13910347426313,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a92c"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -3.87175687212118,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a92d"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -2.34964443252533,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a92e"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -1.35215245950652,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a92f"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.13060361385015,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a930"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.611298638904317,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a931"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -2.21712028260411,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a932"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.844364010662097,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a933"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.105451530265058,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a934"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -4.99740349391139,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a935"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.45990684424665,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a936"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -3.12536197873738,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a937"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -1.14440022802305,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a938"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.271385105600673,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a939"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -3.92397292363966,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a93a"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -3.58608012253158,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a93b"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.2960945702992,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a93c"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.284511623948854,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a93d"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.538493697715966,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a93e"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.61703868301453,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a93f"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -2.15416773651189,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a940"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 2.00781459375036,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a941"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.72322705991092,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a942"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.573378673789716,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a943"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.49356322267859,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a944"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -4.02644783910735,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a945"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.924937240376957,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a946"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -3.95751685802432,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a947"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -0.7492075493805,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a948"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -4.98704710369076,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a949"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -2.89490427671048,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a94a"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.91798388579404,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a94b"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : -1.99782261841201,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a94c"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 0.749079181654486,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a94d"
            },
            "name" : "SP1_tf_viper_v5",
            "val" : 1.47821095420857,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107346"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.477698559192062,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107347"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.330124312534172,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107348"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.27960458091633,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107349"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.947749848144071,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510734a"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 2.00655155199206,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510734b"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.676210359762255,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510734c"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.81240530799533,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510734d"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.34865223292615,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510734e"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.684968764943506,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510734f"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.554831792849505,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107350"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 2.14878924725638,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107351"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.56285998965104,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107352"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.87573352015151,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107353"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 2.3800100858042,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107354"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.83607121840279,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107355"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.97411136334504,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107356"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.521384226519328,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107357"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.596365934039791,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107358"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.734201010695416,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107359"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.512962125985002,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510735a"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.734224863952684,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510735b"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.700107134325839,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510735c"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.134575875061729,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510735d"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 2.20789803433088,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510735e"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.26558460001969,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510735f"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.48342430188513,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107360"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 2.0668521748458,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107361"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.528873138715622,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107362"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 2.53232631461522,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107363"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.00858184718513,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107364"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.42156656561025,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107365"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.59255231694032,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107366"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.57291504279362,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107367"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.557360107141757,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107368"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.562909657548508,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107369"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.774426509873615,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510736a"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.40103076553463,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510736b"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.237499664628331,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510736c"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.589151657207963,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510736d"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.24410536822931,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510736e"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.2406102605557,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a7510736f"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.592570756270703,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107370"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.11166114512866,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107371"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.612857957472699,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107372"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.154611756631702,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107373"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 0.818038418916,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107374"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -0.576897713945006,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107375"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : 1.72981997027735,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107376"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.29235710058262,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107377"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -1.70687421798822,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107378"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -2.12422117725386,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cb008e9861a75107379"
            },
            "name" : "PRKCB_kinase_viper_v5",
            "val" : -2.38636019965872,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ca"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.853058144557864,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094cb"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.978643456133754,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094cc"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 2.2314987247393,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094cd"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.404141538216262,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ce"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.592209247147051,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094cf"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.977099045080435,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d0"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.252610786776962,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d1"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.241779407816036,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d2"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.641741623479783,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d3"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.75173352876217,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d4"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.35870147456598,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d5"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.0287207537973,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d6"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.31303129046302,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d7"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.553762369837857,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d8"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.269640308766044,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094d9"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.83060248973149,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094da"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.38266154402287,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094db"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.344335212514972,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094dc"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.640353633819705,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094dd"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 2.6365509321341,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094de"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.341009342057133,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094df"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.89580907388164,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e0"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.475783115584468,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e1"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.85668847350058,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e2"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -1.49331626675104,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e3"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.880076471831941,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e4"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.971173276538079,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e5"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -1.15949161094982,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e6"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.90066623859672,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e7"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.71478045480006,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e8"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.337944688124257,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094e9"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.699243866431543,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ea"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.397382774144617,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094eb"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.572230692996656,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ec"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.83627626105614,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ed"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.236662679392187,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ee"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -1.63329906884309,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094ef"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.220714550075339,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f0"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.185174164251597,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f1"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.116168155208218,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f2"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.631462333235677,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f3"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.08854788483739,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f4"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -1.84164141368572,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f5"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 1.11777273611514,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f6"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.174684390335385,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f7"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.330373026049365,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f8"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.688444913546583,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094f9"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.321174160791674,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094fa"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -2.45456722083865,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094fb"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.687155578699527,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094fc"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : -0.211392218988315,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751094fd"
            },
            "name" : "MEIS1_tf_viper_v5",
            "val" : 0.34530104910577,
            "id" : "DTB-132"
        }]]
    }
};

// TODO small cell settings

smcObsDeckSettings = commonObsDeckSettings;
abiObsDeckSettings["pivotScores"] = {
    "object" : [{
        "name_2" : "smc-adeno-50",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "8.84929027213"
    }, {
        "name_2" : "smc-iac-50",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "7.04638958759"
    }, {
        "name_2" : "smc50",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "7.04638958759"
    }, {
        "name_2" : "smc-adeno-20k",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "5.24460960344"
    }, {
        "name_2" : "ASCL1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "5.18294993336"
    }, {
        "name_2" : "POU3F2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "4.07106190143"
    }, {
        "name_2" : "smc20k",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.91029597617"
    }, {
        "name_2" : "smc-iac-20k",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.91029597617"
    }, {
        "name_2" : "adeno20k",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.1553670779"
    }, {
        "name_2" : "RXRA_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.03592561798"
    }, {
        "name_2" : "WT1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.03137069602"
    }, {
        "name_2" : "SUZ12_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.73126420693"
    }, {
        "name_2" : "HNF4A_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.70663499669"
    }, {
        "name_2" : "SNAI2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.69576192395"
    }, {
        "name_2" : "REST_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.60495014099"
    }, {
        "name_2" : "PDX1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.51461873673"
    }, {
        "name_2" : "FOXA2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.42884890705"
    }, {
        "name_2" : "NR0B1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.31604639752"
    }, {
        "name_2" : "PPARA_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.30482438393"
    }, {
        "name_2" : "HBP1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.29499940297"
    }, {
        "name_2" : "STAT5B_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.21500779785"
    }, {
        "name_2" : "EZH2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.20298098841"
    }, {
        "name_2" : "RUNX2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.07796002953"
    }, {
        "name_2" : "CDX2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.04423725806"
    }, {
        "name_2" : "PPARD_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.01454435031"
    }, {
        "name_2" : "RAD21_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.00667531832"
    }, {
        "name_2" : "NEUROD1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.00445114577"
    }, {
        "name_2" : "ELK4_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.90617561437"
    }, {
        "name_2" : "EN1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.87089230395"
    }, {
        "name_2" : "CDK2_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.8700122749"
    }, {
        "name_2" : "DBP_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.85864098737"
    }, {
        "name_2" : "ZEB1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.84964404598"
    }, {
        "name_2" : "TCF12_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.80838222605"
    }, {
        "name_2" : "PAX8_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.78858300561"
    }, {
        "name_2" : "SOX1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.76680831922"
    }, {
        "name_2" : "NR1I3_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.73810198567"
    }, {
        "name_2" : "adeno50",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.64915259616"
    }, {
        "name_2" : "FOXC2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.62222282599"
    }, {
        "name_2" : "AURKB_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.58355078242"
    }, {
        "name_2" : "TP53_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.57581198217"
    }, {
        "name_2" : "PAX6_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.56077147915"
    }, {
        "name_2" : "E2F1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.54183170631"
    }, {
        "name_2" : "CHEK2_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.52787076889"
    }, {
        "name_2" : "NR5A2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.52074059558"
    }, {
        "name_2" : "MALAT1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.48697117104"
    }, {
        "name_2" : "FOXM1_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.47792587708"
    }, {
        "name_2" : "ATM_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.44680796344"
    }, {
        "name_2" : "PRKAA1_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.43750515534"
    }, {
        "name_2" : "CDK5_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.43022900534"
    }, {
        "name_2" : "ESRRA_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.35943100591"
    }, {
        "name_2" : "SREBF2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.34427764652"
    }, {
        "name_2" : "CDK7_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.32853936209"
    }, {
        "name_2" : "NR1I2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.32497145117"
    }, {
        "name_2" : "TBX2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.32056950963"
    }, {
        "name_2" : "GLI2_tf_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.31524353698"
    }, {
        "name_2" : "AURKA_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.30961691833"
    }, {
        "name_2" : "PLK3_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.30405119737"
    }, {
        "name_2" : "MAPK9_kinase_viper",
        "name_1" : "Small_Cell",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.30150839124"
    }, {
        "name_2" : "ARL11",
        "name_1" : "Small_Cell",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "6.63821938248"
    }, {
        "name_2" : "AHSG",
        "name_1" : "Small_Cell",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "6.05658237258"
    }, {
        "name_2" : "C6orf195",
        "name_1" : "Small_Cell",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "6.05621300815"
    }, {
        "name_2" : "HP",
        "name_1" : "Small_Cell",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "5.91388704981"
    }, {
        "name_2" : "ENKUR",
        "name_1" : "Small_Cell",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "5.4553158729"
    }]

};
smcObsDeckSettings["mongoData"] = {
    'clinical' : commonClinicalEventsDocList,
    'expression' : [{
        "Study_ID" : "prad_wcdt",
        "gene" : "ARL11",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-132" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 3.27393356926689
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 3.85235846694904
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 2.58496250072116
            },
            "DTB-131" : {
                "rsem_quan_log2" : 4.16341822250073
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
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 0
            },
            "DTB-001" : {
                "rsem_quan_log2" : 5.53774645066065
            },
            "DTB-069" : {
                "rsem_quan_log2" : 4.47745715083959
            },
            "DTB-040" : {
                "rsem_quan_log2" : 0
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 6.37446919339681
            },
            "DTB-009" : {
                "rsem_quan_log2" : 3.9118353649106
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 6.86599673579113
            },
            "DTB-020" : {
                "rsem_quan_log2" : 0
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 4.67468097115014
            },
            "DTB-023" : {
                "rsem_quan_log2" : 1.54606718045021
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 7.34050708096905
            },
            "DTB-089" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 4.53743275006849
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 1.35343621786178
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 2.47131754424631
            },
            "DTB-080" : {
                "rsem_quan_log2" : 2.98123161291209
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063" : {
                "rsem_quan_log2" : 2.10443730944613
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 4.43876524354826
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 3.36854487466153
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073" : {
                "rsem_quan_log2" : 0
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-071" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 5.29467220716008
            },
            "DTB-059" : {
                "rsem_quan_log2" : 0
            },
            "DTB-156" : {
                "rsem_quan_log2" : 5.37373172237873
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 5.31491400097879
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 5.09307418191462
            },
            "DTB-036" : {
                "rsem_quan_log2" : 6.82208639922165
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 0
            },
            "DTB-110" : {
                "rsem_quan_log2" : 3.9892298543215
            },
            "DTB-032" : {
                "rsem_quan_log2" : 6.30606168942834
            },
            "DTB-031" : {
                "rsem_quan_log2" : 0
            },
            "DTB-030" : {
                "rsem_quan_log2" : 4.19587512505077
            },
            "DTB-049" : {
                "rsem_quan_log2" : 0
            },
            "DTB-095" : {
                "rsem_quan_log2" : 3.06227716635985
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 6.06657359626612
            },
            "DTB-064" : {
                "rsem_quan_log2" : 5.65137034086078
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "AHSG",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-132" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 11.6599730659249
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 6.58496250072116
            },
            "DTB-131" : {
                "rsem_quan_log2" : 0
            },
            "DTB-124" : {
                "rsem_quan_log2" : 0
            },
            "DTB-060" : {
                "rsem_quan_log2" : 0
            },
            "DTB-061" : {
                "rsem_quan_log2" : 4.33848146536253
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 0
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 5.23781989936604
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 1.90002629896485
            },
            "DTB-009" : {
                "rsem_quan_log2" : 1.7406685641404
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 0
            },
            "DTB-020" : {
                "rsem_quan_log2" : 2.57012286181475
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 0
            },
            "DTB-023" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 3.84129889887229
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 0
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 3.26614186798577
            },
            "DTB-063" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 0
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073" : {
                "rsem_quan_log2" : 0
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 8.84554148524201
            },
            "DTB-071" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-059" : {
                "rsem_quan_log2" : 12.6411172724309
            },
            "DTB-156" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 1.51712448580564
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 0
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 2.81231338423505
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 0
            },
            "DTB-110" : {
                "rsem_quan_log2" : 0
            },
            "DTB-032" : {
                "rsem_quan_log2" : 0
            },
            "DTB-031" : {
                "rsem_quan_log2" : 0
            },
            "DTB-030" : {
                "rsem_quan_log2" : 0
            },
            "DTB-049" : {
                "rsem_quan_log2" : 12.5719065259271
            },
            "DTB-095" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 3.17815689310641
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "C6orf195",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-132" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-131" : {
                "rsem_quan_log2" : 0
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
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 0
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 0
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 5.72553940499601
            },
            "DTB-009" : {
                "rsem_quan_log2" : 2.50685579031528
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 3.86842996487329
            },
            "DTB-020" : {
                "rsem_quan_log2" : 0
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 0
            },
            "DTB-023" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 4.96822902289892
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 2.03927879535137
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 0
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 2.72181010491404
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073" : {
                "rsem_quan_log2" : 0
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
                "rsem_quan_log2" : 4.90215560311843
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 0
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 0
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 0
            },
            "DTB-110" : {
                "rsem_quan_log2" : 3.68983587744717
            },
            "DTB-032" : {
                "rsem_quan_log2" : 5.79928162152192
            },
            "DTB-031" : {
                "rsem_quan_log2" : 0
            },
            "DTB-030" : {
                "rsem_quan_log2" : 1.79709600825491
            },
            "DTB-049" : {
                "rsem_quan_log2" : 0
            },
            "DTB-095" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 1.3842156242818
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "HP",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 5.43191374242862
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 3.38322043336566
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 6.9862539141556
            },
            "DTB-132" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 15.9272310062662
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 9.78299820892041
            },
            "DTB-131" : {
                "rsem_quan_log2" : 0
            },
            "DTB-124" : {
                "rsem_quan_log2" : 0
            },
            "DTB-060" : {
                "rsem_quan_log2" : 4.14296067590559
            },
            "DTB-061" : {
                "rsem_quan_log2" : 9.93924009705288
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 4.42410244762503
            },
            "DTB-001" : {
                "rsem_quan_log2" : 4.26166620258579
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 5.52035938462784
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 7.22660967675656
            },
            "DTB-009" : {
                "rsem_quan_log2" : 2.07327183642452
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 2.13796249006763
            },
            "DTB-020" : {
                "rsem_quan_log2" : 6.02685095106256
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 0
            },
            "DTB-023" : {
                "rsem_quan_log2" : 1.54606718045021
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 5.40990681952926
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 5.98235933376575
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 1.41364823661203
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 3.33498294798696
            },
            "DTB-080" : {
                "rsem_quan_log2" : 2.98123161291209
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 4.1891445533126
            },
            "DTB-063" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 4.51713708702796
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 2.44174904700924
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 0
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 2.78872746673981
            },
            "DTB-073" : {
                "rsem_quan_log2" : 3.73008559370039
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 12.9511085205411
            },
            "DTB-071" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 8.04053686242539
            },
            "DTB-059" : {
                "rsem_quan_log2" : 15.1041721675742
            },
            "DTB-156" : {
                "rsem_quan_log2" : 2.96731619026928
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 1.55419589398473
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 4.39231742277876
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 1.32538641465977
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 4.3786503372619
            },
            "DTB-110" : {
                "rsem_quan_log2" : 0
            },
            "DTB-032" : {
                "rsem_quan_log2" : 0
            },
            "DTB-031" : {
                "rsem_quan_log2" : 0
            },
            "DTB-030" : {
                "rsem_quan_log2" : 3.98654746144563
            },
            "DTB-049" : {
                "rsem_quan_log2" : 14.3248330230282
            },
            "DTB-095" : {
                "rsem_quan_log2" : 3.38014759931603
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 6.80525891616305
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }],
    'mutation' : []
};
abiObsDeckSettings["signature"] = {
    'expression' : {
        'object' : [[{
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b505"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.54402822425404,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b506"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.28651459201785,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b507"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.194638444684382,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b508"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.64491974699961,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b509"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.10869357971709,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.79804387472692,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.43885326792729,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.071732663380232,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.87551248517154,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.30641480516501,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.50422900770783,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b510"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.0580647670189,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b511"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.79263657664497,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b512"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.89980396143146,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b513"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.85710353878168,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b514"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.22250770430289,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b515"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 2.18226742579345,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b516"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.43870041390178,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b517"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -4.09760728076294,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b518"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 2.05813498024574,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b519"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.04753902055037,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.290021221143811,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.62418640242889,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.54206265998976,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.49106578066357,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.45995987734852,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.47134368740066,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b520"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.29175180370533,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b521"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.05378309076865,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b522"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.30720188171506,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b523"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.11715664192894,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b524"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.67392064496965,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b525"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.95437204616153,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b526"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.596162380783887,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b527"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.47532013650408,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b528"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.94077093081395,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b529"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.54134472246018,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.02033224785088,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.87934793076506,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.59540252943428,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.63350187439237,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.33838900869974,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.52298455121419,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b530"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.01764356206205,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b531"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.9839448224079,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b532"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.48346816626262,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b533"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.44348161872316,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b534"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 2.04920727029903,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b535"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.16512281252573,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b536"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.0241728696463,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b537"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.94456631331895,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b538"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.1089893573852,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b539"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 1.14024777292728,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.49368423957964,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.98777237501457,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 1.28818618952595,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.38217149041764,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.83655874033929,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.10102706677807,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b540"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.18104148349823,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b541"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.99739651319768,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b542"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 1.51129728202979,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b581"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.77476195504183,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b582"
            },
            "name" : "smc-iac-50_v5",
            "val" : -3.12059561946797,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b583"
            },
            "name" : "smc-iac-50_v5",
            "val" : 0.483091754918803,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b584"
            },
            "name" : "smc-iac-50_v5",
            "val" : -3.25935290304604,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b585"
            },
            "name" : "smc-iac-50_v5",
            "val" : 0.127978668189963,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b586"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.850583440908302,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b587"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.81644855876333,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b588"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.84016450535153,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b589"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.39651966712656,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b58a"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.69591291839566,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b58b"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.682772703031197,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b58c"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.17829921950438,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b58d"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.38657916505768,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b58e"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.6298739446086,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b58f"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.98308656022806,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b590"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.04359607101542,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b591"
            },
            "name" : "smc-iac-50_v5",
            "val" : 2.17760356218511,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b592"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.76395935579642,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b593"
            },
            "name" : "smc-iac-50_v5",
            "val" : -3.02351176120775,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b594"
            },
            "name" : "smc-iac-50_v5",
            "val" : 2.37901604829069,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b595"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.01764274120782,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b596"
            },
            "name" : "smc-iac-50_v5",
            "val" : 0.754030836207197,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b597"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.19760979634047,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b598"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.839509885258316,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b599"
            },
            "name" : "smc-iac-50_v5",
            "val" : 0.0319372919830725,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b59a"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.31627586361343,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b59b"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.15943248253639,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b59c"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.33573978530536,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b59d"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.2736713754568,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b59e"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.40387112279098,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b59f"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.669054010754051,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a0"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.64034147172586,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a1"
            },
            "name" : "smc-iac-50_v5",
            "val" : -3.39809466709831,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a2"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.21775443582537,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a3"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.57187710199401,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a4"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.183173025964869,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a5"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.677569719434617,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a6"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.81142719668769,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a7"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.47769900813989,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a8"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.72493463338207,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5a9"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.93672990467045,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5aa"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.99202174334449,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5ab"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.67898417825539,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5ac"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.88277451321261,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5ad"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.71615922532279,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5ae"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.21757520399124,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5af"
            },
            "name" : "smc-iac-50_v5",
            "val" : -3.05482213831174,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b0"
            },
            "name" : "smc-iac-50_v5",
            "val" : 2.10892090282973,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b1"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.70202008143014,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b2"
            },
            "name" : "smc-iac-50_v5",
            "val" : -3.19082947517417,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b3"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.05902769279136,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b4"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.57181972970841,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b5"
            },
            "name" : "smc-iac-50_v5",
            "val" : 1.68832034945832,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b6"
            },
            "name" : "smc-iac-50_v5",
            "val" : -2.5260906036841,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b7"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.834844722627347,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b8"
            },
            "name" : "smc-iac-50_v5",
            "val" : 1.42321187348166,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5b9"
            },
            "name" : "smc-iac-50_v5",
            "val" : 0.470847540532888,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5ba"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.894637680026023,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5bb"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.23179029864995,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5bc"
            },
            "name" : "smc-iac-50_v5",
            "val" : -0.00490940164866949,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5bd"
            },
            "name" : "smc-iac-50_v5",
            "val" : -1.19787336222768,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b5be"
            },
            "name" : "smc-iac-50_v5",
            "val" : 1.7839235312555,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b489"
            },
            "name" : "smc50_v5",
            "val" : -1.77476195504183,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b48a"
            },
            "name" : "smc50_v5",
            "val" : -3.12059561946797,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b48b"
            },
            "name" : "smc50_v5",
            "val" : 0.483091754918803,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b48c"
            },
            "name" : "smc50_v5",
            "val" : -3.25935290304604,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b48d"
            },
            "name" : "smc50_v5",
            "val" : 0.127978668189963,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b48e"
            },
            "name" : "smc50_v5",
            "val" : -0.850583440908302,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b48f"
            },
            "name" : "smc50_v5",
            "val" : -1.81644855876333,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b490"
            },
            "name" : "smc50_v5",
            "val" : -1.84016450535153,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b491"
            },
            "name" : "smc50_v5",
            "val" : -2.39651966712656,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b492"
            },
            "name" : "smc50_v5",
            "val" : -1.69591291839566,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b493"
            },
            "name" : "smc50_v5",
            "val" : -0.682772703031197,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b494"
            },
            "name" : "smc50_v5",
            "val" : -1.17829921950438,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b495"
            },
            "name" : "smc50_v5",
            "val" : -1.38657916505768,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b496"
            },
            "name" : "smc50_v5",
            "val" : -1.6298739446086,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b497"
            },
            "name" : "smc50_v5",
            "val" : -1.98308656022806,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b498"
            },
            "name" : "smc50_v5",
            "val" : -2.04359607101542,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b499"
            },
            "name" : "smc50_v5",
            "val" : 2.17760356218511,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b49a"
            },
            "name" : "smc50_v5",
            "val" : -2.76395935579642,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b49b"
            },
            "name" : "smc50_v5",
            "val" : -3.02351176120775,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b49c"
            },
            "name" : "smc50_v5",
            "val" : 2.37901604829069,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b49d"
            },
            "name" : "smc50_v5",
            "val" : -1.01764274120782,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b49e"
            },
            "name" : "smc50_v5",
            "val" : 0.754030836207197,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b49f"
            },
            "name" : "smc50_v5",
            "val" : -1.19760979634047,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a0"
            },
            "name" : "smc50_v5",
            "val" : -0.839509885258316,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a1"
            },
            "name" : "smc50_v5",
            "val" : 0.0319372919830725,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a2"
            },
            "name" : "smc50_v5",
            "val" : -2.31627586361343,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a3"
            },
            "name" : "smc50_v5",
            "val" : -2.15943248253639,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a4"
            },
            "name" : "smc50_v5",
            "val" : -2.33573978530536,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a5"
            },
            "name" : "smc50_v5",
            "val" : -2.2736713754568,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a6"
            },
            "name" : "smc50_v5",
            "val" : -1.40387112279098,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a7"
            },
            "name" : "smc50_v5",
            "val" : -0.669054010754051,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a8"
            },
            "name" : "smc50_v5",
            "val" : -2.64034147172586,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4a9"
            },
            "name" : "smc50_v5",
            "val" : -3.39809466709831,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4aa"
            },
            "name" : "smc50_v5",
            "val" : -0.21775443582537,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ab"
            },
            "name" : "smc50_v5",
            "val" : -2.57187710199401,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ac"
            },
            "name" : "smc50_v5",
            "val" : -0.183173025964869,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ad"
            },
            "name" : "smc50_v5",
            "val" : -0.677569719434617,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ae"
            },
            "name" : "smc50_v5",
            "val" : -2.81142719668769,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4af"
            },
            "name" : "smc50_v5",
            "val" : -1.47769900813989,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b0"
            },
            "name" : "smc50_v5",
            "val" : -1.72493463338207,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b1"
            },
            "name" : "smc50_v5",
            "val" : -1.93672990467045,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b2"
            },
            "name" : "smc50_v5",
            "val" : -1.99202174334449,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b3"
            },
            "name" : "smc50_v5",
            "val" : -2.67898417825539,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b4"
            },
            "name" : "smc50_v5",
            "val" : -1.88277451321261,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b5"
            },
            "name" : "smc50_v5",
            "val" : -2.71615922532279,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b6"
            },
            "name" : "smc50_v5",
            "val" : -2.21757520399124,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b7"
            },
            "name" : "smc50_v5",
            "val" : -3.05482213831174,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b8"
            },
            "name" : "smc50_v5",
            "val" : 2.10892090282973,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4b9"
            },
            "name" : "smc50_v5",
            "val" : -2.70202008143014,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ba"
            },
            "name" : "smc50_v5",
            "val" : -3.19082947517417,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4bb"
            },
            "name" : "smc50_v5",
            "val" : -2.05902769279136,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4bc"
            },
            "name" : "smc50_v5",
            "val" : -2.57181972970841,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4bd"
            },
            "name" : "smc50_v5",
            "val" : 1.68832034945832,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4be"
            },
            "name" : "smc50_v5",
            "val" : -2.5260906036841,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4bf"
            },
            "name" : "smc50_v5",
            "val" : -0.834844722627347,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c0"
            },
            "name" : "smc50_v5",
            "val" : 1.42321187348166,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c1"
            },
            "name" : "smc50_v5",
            "val" : 0.470847540532888,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c2"
            },
            "name" : "smc50_v5",
            "val" : -0.894637680026023,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c3"
            },
            "name" : "smc50_v5",
            "val" : -1.23179029864995,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c4"
            },
            "name" : "smc50_v5",
            "val" : -0.00490940164866949,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c5"
            },
            "name" : "smc50_v5",
            "val" : -1.19787336222768,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c6"
            },
            "name" : "smc50_v5",
            "val" : 1.7839235312555,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c7"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.34261137583946,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c8"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.45925646295283,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4c9"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.17864462359073,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ca"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.53249924851832,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4cb"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.25191425793829,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4cc"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.25132876692831,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4cd"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.45921003603274,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ce"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.24261948934886,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4cf"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.26722966928126,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d0"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.28557071429582,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d1"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.27715241364873,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d2"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.25755329126326,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d3"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.33247418335839,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d4"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.28576061003987,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d5"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.25456276442229,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d6"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.38575313219751,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d7"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.05848738597767,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d8"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.2915618243353,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4d9"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.50224547414451,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4da"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.11407541091433,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4db"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.34810829338956,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4dc"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.12700944697632,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4dd"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.32749896459105,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4de"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.28009043134497,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4df"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.3183258024979,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e0"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.30662692234949,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e1"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.35906634088215,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e2"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.37420709928583,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e3"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.26456823419726,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e4"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.29315793312518,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e5"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.29826649829313,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e6"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.41733642539442,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e7"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.39138921012523,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e8"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.2929053759239,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4e9"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.29582321938662,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ea"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.31902830886431,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4eb"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.3267575843769,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ec"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.3131238566998,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ed"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.35900257345927,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ee"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.41514350341031,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ef"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.44457742819705,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f0"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.35405966419742,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f1"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.44671727318695,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f2"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.37257598644459,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f3"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.42934941514905,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f4"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.373755681591,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f5"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.52419129390904,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f6"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.10090164842226,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f7"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.38124349308895,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f8"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.51639261392941,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4f9"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.40492132790883,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4fa"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.41608910349051,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4fb"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.18554958107505,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4fc"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.27907828855447,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4fd"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.26024811647479,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4fe"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.19712960517141,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b4ff"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.1783858027293,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b500"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.202265847204,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b501"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.24522008117974,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b502"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.16545897755699,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b503"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.25320673617083,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b504"
            },
            "name" : "smc-adeno-20k_v5",
            "val" : -1.14438793136491,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f2"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 1.30066545244739,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f3"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.853720100865971,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f4"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 3.83107586748408,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f5"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 0.619428522094577,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f6"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.62833250089641,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f7"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.984432548451678,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f8"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.13997935908725,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077f9"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.264535530795292,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077fa"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.204612897279775,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077fb"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.280218164337137,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077fc"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.898812142094111,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077fd"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 1.43098443178706,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077fe"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.96848567571572,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a751077ff"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.45298750640199,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107800"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.05183020279013,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107801"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.796376299134077,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107802"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 3.36061617970762,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107803"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.115584866736552,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107804"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.751803555141036,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107805"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 4.60584912554893,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107806"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.153960716425123,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107807"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 3.47922319744446,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107808"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.528565707157054,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107809"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.094274114778651,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510780a"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 2.25634849670179,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510780b"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.19614018993257,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510780c"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.110402700829912,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510780d"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.32148524208952,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510780e"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.46218342350533,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510780f"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -2.12943450497208,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107810"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 0.932107927326089,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107811"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.902763777224607,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107812"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 0.701638131235081,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107813"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.312254641671145,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107814"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 0.0461176195937342,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107815"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -2.08830011491109,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107816"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.03529303344108,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107817"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.629050453401413,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107818"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.764146002745086,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107819"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.736295695872574,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510781a"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.401821186160388,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510781b"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.577612383976558,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510781c"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.856291696637686,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510781d"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.46873267238109,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510781e"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.19624306168629,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510781f"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -0.205411051339624,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107820"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 0.134812560676154,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107821"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : 5.17677066970795,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107822"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -2.04623164772533,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107823"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.45564634332073,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107824"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.40310247961211,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107825"
            },
            "name" : "ASCL1_tf_viper_v5",
            "val" : -1.08592687426256,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ff6"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 1.7154022056427,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ff7"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -0.740544643059694,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ff8"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 4.66295592156496,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ff9"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.64145657196518,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ffa"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -0.594766308800223,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ffb"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 0.293315954933205,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ffc"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.3659888813942,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ffd"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 0.987802277506355,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109ffe"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.67168512105034,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75109fff"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 1.45181653843403,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a000"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 1.27608135823056,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a001"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 2.93500979048205,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a002"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.69942961280973,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a003"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -0.653602185792875,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a004"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.52029276828713,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a005"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.91041622885976,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a006"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 5.10517777863625,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a007"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 2.22249933452565,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a008"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -3.29695989885689,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a009"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 5.20576422805161,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a00a"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -0.358792780965887,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a00b"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 6.62917830989167,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a00c"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 0.722609605731122,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a00d"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 2.11713275562862,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a00e"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 4.04993443985247,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a00f"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.49363048262163,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a010"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -0.560718758768869,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a011"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.34373937594832,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a012"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 1.47804516355267,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a013"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 1.89182930735246,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a014"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 0.96689759873976,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a015"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.24694291717827,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a016"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -3.27334282047111,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a017"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 3.67305605680679,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a018"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 0.967682446413976,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a019"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.75081808204993,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a01a"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.05188685775536,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a01b"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 0.474636130474785,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a01c"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.64242821957867,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a01d"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.69341643457975,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a01e"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.40525509797659,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a01f"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.14538321182877,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a020"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.7021754916587,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a021"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -3.10514745595703,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a022"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -3.28471306423975,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a023"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.45637255721137,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a024"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.45069737601163,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a025"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : 5.31585277286618,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a026"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.26171961665232,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a027"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -1.26331395655733,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a028"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -2.85057970186371,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a029"
            },
            "name" : "POU3F2_tf_viper_v5",
            "val" : -3.40369868054497,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b44b"
            },
            "name" : "smc20k_v5",
            "val" : -0.66973596582714,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b44c"
            },
            "name" : "smc20k_v5",
            "val" : -0.970584830525751,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b44d"
            },
            "name" : "smc20k_v5",
            "val" : -0.419677083293288,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b44e"
            },
            "name" : "smc20k_v5",
            "val" : -0.975195472848946,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b44f"
            },
            "name" : "smc20k_v5",
            "val" : -0.448829741896647,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b450"
            },
            "name" : "smc20k_v5",
            "val" : -0.48857339454506,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b451"
            },
            "name" : "smc20k_v5",
            "val" : -0.889696790241592,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b452"
            },
            "name" : "smc20k_v5",
            "val" : -0.518578184963914,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b453"
            },
            "name" : "smc20k_v5",
            "val" : -0.509807969842329,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b454"
            },
            "name" : "smc20k_v5",
            "val" : -0.564496628918696,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b455"
            },
            "name" : "smc20k_v5",
            "val" : -0.485556565151618,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b456"
            },
            "name" : "smc20k_v5",
            "val" : -0.475886723628961,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b457"
            },
            "name" : "smc20k_v5",
            "val" : -0.640410837055294,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b458"
            },
            "name" : "smc20k_v5",
            "val" : -0.539082029780375,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b459"
            },
            "name" : "smc20k_v5",
            "val" : -0.527595271595777,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b45a"
            },
            "name" : "smc20k_v5",
            "val" : -0.691507478985148,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b45b"
            },
            "name" : "smc20k_v5",
            "val" : -0.264162348265236,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b45c"
            },
            "name" : "smc20k_v5",
            "val" : -0.684419683869069,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b45d"
            },
            "name" : "smc20k_v5",
            "val" : -0.906455191523623,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b45e"
            },
            "name" : "smc20k_v5",
            "val" : -0.371898201425282,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b45f"
            },
            "name" : "smc20k_v5",
            "val" : -0.636281715369613,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b460"
            },
            "name" : "smc20k_v5",
            "val" : -0.342563749609168,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b461"
            },
            "name" : "smc20k_v5",
            "val" : -0.582447117702817,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b462"
            },
            "name" : "smc20k_v5",
            "val" : -0.559195187844471,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b463"
            },
            "name" : "smc20k_v5",
            "val" : -0.5771067967266,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b464"
            },
            "name" : "smc20k_v5",
            "val" : -0.616969241021205,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b465"
            },
            "name" : "smc20k_v5",
            "val" : -0.711126421779098,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b466"
            },
            "name" : "smc20k_v5",
            "val" : -0.745834138969195,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b467"
            },
            "name" : "smc20k_v5",
            "val" : -0.609593312413035,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b468"
            },
            "name" : "smc20k_v5",
            "val" : -0.53801406381699,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b469"
            },
            "name" : "smc20k_v5",
            "val" : -0.512814756723435,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b46a"
            },
            "name" : "smc20k_v5",
            "val" : -0.874860621149576,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b46b"
            },
            "name" : "smc20k_v5",
            "val" : -0.842222897815119,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b46c"
            },
            "name" : "smc20k_v5",
            "val" : -0.61057340618557,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b46d"
            },
            "name" : "smc20k_v5",
            "val" : -0.638372399137364,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b46e"
            },
            "name" : "smc20k_v5",
            "val" : -0.582563170493789,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b46f"
            },
            "name" : "smc20k_v5",
            "val" : -0.64763132312659,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b470"
            },
            "name" : "smc20k_v5",
            "val" : -0.651636388428256,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b471"
            },
            "name" : "smc20k_v5",
            "val" : -0.678006108811108,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b472"
            },
            "name" : "smc20k_v5",
            "val" : -0.797632213782391,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b473"
            },
            "name" : "smc20k_v5",
            "val" : -0.862105185319203,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b474"
            },
            "name" : "smc20k_v5",
            "val" : -0.696105445872775,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b475"
            },
            "name" : "smc20k_v5",
            "val" : -0.917140078745599,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b476"
            },
            "name" : "smc20k_v5",
            "val" : -0.658341785050512,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b477"
            },
            "name" : "smc20k_v5",
            "val" : -0.762914717534289,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b478"
            },
            "name" : "smc20k_v5",
            "val" : -0.667348861458807,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b479"
            },
            "name" : "smc20k_v5",
            "val" : -1.1088716818323,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b47a"
            },
            "name" : "smc20k_v5",
            "val" : -0.329138367154027,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b47b"
            },
            "name" : "smc20k_v5",
            "val" : -0.687934251931223,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b47c"
            },
            "name" : "smc20k_v5",
            "val" : -0.95602527659815,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b47d"
            },
            "name" : "smc20k_v5",
            "val" : -0.7154816130749,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b47e"
            },
            "name" : "smc20k_v5",
            "val" : -0.764560276814203,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b47f"
            },
            "name" : "smc20k_v5",
            "val" : -0.374813518090269,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b480"
            },
            "name" : "smc20k_v5",
            "val" : -0.532320137721909,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b481"
            },
            "name" : "smc20k_v5",
            "val" : -0.456430737715278,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b482"
            },
            "name" : "smc20k_v5",
            "val" : -0.442859514513494,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b483"
            },
            "name" : "smc20k_v5",
            "val" : -0.33797818306843,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b484"
            },
            "name" : "smc20k_v5",
            "val" : -0.429070304504339,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b485"
            },
            "name" : "smc20k_v5",
            "val" : -0.505217332942786,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b486"
            },
            "name" : "smc20k_v5",
            "val" : -0.353111574541599,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b487"
            },
            "name" : "smc20k_v5",
            "val" : -0.492942186844952,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b488"
            },
            "name" : "smc20k_v5",
            "val" : -0.334831047881221,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b543"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.66973596582714,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b544"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.970584830525751,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b545"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.419677083293288,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b546"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.975195472848946,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b547"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.448829741896647,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b548"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.48857339454506,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b549"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.889696790241592,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b54a"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.518578184963914,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b54b"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.509807969842329,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b54c"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.564496628918696,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b54d"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.485556565151618,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b54e"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.475886723628961,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b54f"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.640410837055294,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b550"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.539082029780375,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b551"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.527595271595777,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b552"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.691507478985148,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b553"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.264162348265236,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b554"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.684419683869069,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b555"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.906455191523623,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b556"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.371898201425282,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b557"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.636281715369613,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b558"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.342563749609168,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b559"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.582447117702817,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b55a"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.559195187844471,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b55b"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.5771067967266,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b55c"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.616969241021205,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b55d"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.711126421779098,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b55e"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.745834138969195,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b55f"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.609593312413035,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b560"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.53801406381699,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b561"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.512814756723435,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b562"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.874860621149576,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b563"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.842222897815119,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b564"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.61057340618557,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b565"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.638372399137364,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b566"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.582563170493789,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b567"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.64763132312659,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b568"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.651636388428256,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b569"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.678006108811108,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b56a"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.797632213782391,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b56b"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.862105185319203,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b56c"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.696105445872775,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b56d"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.917140078745599,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b56e"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.658341785050512,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b56f"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.762914717534289,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b570"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.667348861458807,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b571"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -1.1088716818323,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b572"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.329138367154027,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b573"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.687934251931223,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b574"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.95602527659815,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b575"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.7154816130749,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b576"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.764560276814203,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b577"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.374813518090269,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b578"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.532320137721909,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b579"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.456430737715278,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b57a"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.442859514513494,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b57b"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.33797818306843,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b57c"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.429070304504339,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b57d"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.505217332942786,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b57e"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.353111574541599,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b57f"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.492942186844952,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b580"
            },
            "name" : "smc-iac-20k_v5",
            "val" : -0.334831047881221,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b353"
            },
            "name" : "adeno20k_v5",
            "val" : -0.10562634445712,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b354"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0591822032116719,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b355"
            },
            "name" : "adeno20k_v5",
            "val" : -0.031286383554246,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b356"
            },
            "name" : "adeno20k_v5",
            "val" : -0.175124529557319,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b357"
            },
            "name" : "adeno20k_v5",
            "val" : -0.124577104791598,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b358"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0737913299418104,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b359"
            },
            "name" : "adeno20k_v5",
            "val" : -0.106232533276754,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0737146113088622,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.103064390040514,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0959244190977974,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.135907601346208,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.111723669456106,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.106087324202886,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b360"
            },
            "name" : "adeno20k_v5",
            "val" : -0.110303190142414,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b361"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0735679320305563,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b362"
            },
            "name" : "adeno20k_v5",
            "val" : -0.149385688548283,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b363"
            },
            "name" : "adeno20k_v5",
            "val" : 0.0203635014209106,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b364"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0288420939032702,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b365"
            },
            "name" : "adeno20k_v5",
            "val" : -0.173942255875349,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b366"
            },
            "name" : "adeno20k_v5",
            "val" : 0.0187686819514892,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b367"
            },
            "name" : "adeno20k_v5",
            "val" : -0.137402561148301,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b368"
            },
            "name" : "adeno20k_v5",
            "val" : 0.0102137710790084,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b369"
            },
            "name" : "adeno20k_v5",
            "val" : -0.145549813606209,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0704647514418632,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.13034628102345,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0826557512355797,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0391264382947629,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0958181499847976,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0374485098849909,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b370"
            },
            "name" : "adeno20k_v5",
            "val" : -0.121355327733924,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b371"
            },
            "name" : "adeno20k_v5",
            "val" : -0.146571908399095,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b372"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0617993409545593,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b373"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0482842457139326,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b374"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0757646694780516,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b375"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0605011146627951,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b376"
            },
            "name" : "adeno20k_v5",
            "val" : -0.132943036208026,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b377"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0964234669144823,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b378"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0811377425286431,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b379"
            },
            "name" : "adeno20k_v5",
            "val" : -0.123793193416427,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.119033687713133,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.115669271980734,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.10695921837442,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0801787191444682,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.158805516642751,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.164413066036133,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b380"
            },
            "name" : "adeno20k_v5",
            "val" : -0.152940682006058,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b381"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0473555012864845,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b382"
            },
            "name" : "adeno20k_v5",
            "val" : 0.00610191278048144,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b383"
            },
            "name" : "adeno20k_v5",
            "val" : -0.144201794442167,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b384"
            },
            "name" : "adeno20k_v5",
            "val" : -0.163953740597342,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b385"
            },
            "name" : "adeno20k_v5",
            "val" : -0.162610087795849,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b386"
            },
            "name" : "adeno20k_v5",
            "val" : -0.148277283213144,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b387"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0882396632961423,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b388"
            },
            "name" : "adeno20k_v5",
            "val" : -0.105495128101961,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b389"
            },
            "name" : "adeno20k_v5",
            "val" : -0.129415302967839,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0539213983366026,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0904533022618497,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0488433351889508,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0803005906937496,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0678674134037319,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.100396037155273,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b390"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0538935146235054,
            "id" : "DTB-156"
        }]]
    }
};

// TODO adeno settings

adenoObsDeckSettings = commonObsDeckSettings;
abiObsDeckSettings["pivotScores"] = {
    "object" : [{
        "name_2" : "adeno50",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "16.8434432769"
    }, {
        "name_2" : "adeno20k",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "13.2441990367"
    }, {
        "name_2" : "iac-adeno-50",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "9.64524608969"
    }, {
        "name_2" : "smc-adeno-50",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "4.80682116727"
    }, {
        "name_2" : "RUNX2_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.63801076592"
    }, {
        "name_2" : "SNAI2_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.4451238509"
    }, {
        "name_2" : "DLX5_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.32254061697"
    }, {
        "name_2" : "FOXC2_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.30526382403"
    }, {
        "name_2" : "PPARG_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.07546176575"
    }, {
        "name_2" : "CTCFL_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "2.02392832454"
    }, {
        "name_2" : "GTF2F1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.99734157915"
    }, {
        "name_2" : "EP300_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.98148431607"
    }, {
        "name_2" : "TBP_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.97111723091"
    }, {
        "name_2" : "GLI3_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.82610970542"
    }, {
        "name_2" : "CDK7_kinase_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.79898131104"
    }, {
        "name_2" : "ASCL1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.79347558477"
    }, {
        "name_2" : "smc-adeno-20k",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.70836997276"
    }, {
        "name_2" : "EPAS1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.68879459853"
    }, {
        "name_2" : "PAX8_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.6461539753"
    }, {
        "name_2" : "MAX_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.61629448276"
    }, {
        "name_2" : "POU3F2_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.59486936117"
    }, {
        "name_2" : "GTF2B_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.56084927252"
    }, {
        "name_2" : "RAD21_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.54582736857"
    }, {
        "name_2" : "POU1F1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.49357323837"
    }, {
        "name_2" : "iac-adeno-20k",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.45336532325"
    }, {
        "name_2" : "HOXA9_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.44821676489"
    }, {
        "name_2" : "GLI2_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.39552392477"
    }, {
        "name_2" : "SUZ12_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.34456164884"
    }, {
        "name_2" : "WT1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.33609310294"
    }, {
        "name_2" : "PDX1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.33534669945"
    }, {
        "name_2" : "FOXN1_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.32208492134"
    }, {
        "name_2" : "CDX2_tf_viper",
        "name_1" : "Adeno",
        "datatype_2" : "signature",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "1.3070362578"
    }, {
        "name_2" : "HP",
        "name_1" : "Adeno",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "4.33311738197"
    }, {
        "name_2" : "C11orf24",
        "name_1" : "Adeno",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "4.07536517141"
    }, {
        "name_2" : "SETX",
        "name_1" : "Adeno",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.8475836177"
    }, {
        "name_2" : "MIR155HG",
        "name_1" : "Adeno",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.76559360974"
    }, {
        "name_2" : "HIST1H4B",
        "name_1" : "Adeno",
        "datatype_2" : "expression",
        "datatype_1" : "clinical",
        "version_1" : "1",
        "version_2" : "5",
        "score" : "3.69296995104"
    }]

};
abiObsDeckSettings["mongoData"] = {
    'clinical' : commonClinicalEventsDocList,
    'expression' : [{
        "Study_ID" : "prad_wcdt",
        "gene" : "HP",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 5.43191374242862
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 3.38322043336566
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 6.9862539141556
            },
            "DTB-132" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 15.9272310062662
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 9.78299820892041
            },
            "DTB-131" : {
                "rsem_quan_log2" : 0
            },
            "DTB-124" : {
                "rsem_quan_log2" : 0
            },
            "DTB-060" : {
                "rsem_quan_log2" : 4.14296067590559
            },
            "DTB-061" : {
                "rsem_quan_log2" : 9.93924009705288
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 4.42410244762503
            },
            "DTB-001" : {
                "rsem_quan_log2" : 4.26166620258579
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 5.52035938462784
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 7.22660967675656
            },
            "DTB-009" : {
                "rsem_quan_log2" : 2.07327183642452
            },
            "DTB-121" : {
                "rsem_quan_log2" : 0
            },
            "DTB-120" : {
                "rsem_quan_log2" : 2.13796249006763
            },
            "DTB-020" : {
                "rsem_quan_log2" : 6.02685095106256
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 0
            },
            "DTB-023" : {
                "rsem_quan_log2" : 1.54606718045021
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 0
            },
            "DTB-089" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 5.40990681952926
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 5.98235933376575
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 1.41364823661203
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 3.33498294798696
            },
            "DTB-080" : {
                "rsem_quan_log2" : 2.98123161291209
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 4.1891445533126
            },
            "DTB-063" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 4.51713708702796
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 2.44174904700924
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 0
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 2.78872746673981
            },
            "DTB-073" : {
                "rsem_quan_log2" : 3.73008559370039
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 12.9511085205411
            },
            "DTB-071" : {
                "rsem_quan_log2" : 0
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 8.04053686242539
            },
            "DTB-059" : {
                "rsem_quan_log2" : 15.1041721675742
            },
            "DTB-156" : {
                "rsem_quan_log2" : 2.96731619026928
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 1.55419589398473
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 4.39231742277876
            },
            "DTB-118" : {
                "rsem_quan_log2" : 0
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 1.32538641465977
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 4.3786503372619
            },
            "DTB-110" : {
                "rsem_quan_log2" : 0
            },
            "DTB-032" : {
                "rsem_quan_log2" : 0
            },
            "DTB-031" : {
                "rsem_quan_log2" : 0
            },
            "DTB-030" : {
                "rsem_quan_log2" : 3.98654746144563
            },
            "DTB-049" : {
                "rsem_quan_log2" : 14.3248330230282
            },
            "DTB-095" : {
                "rsem_quan_log2" : 3.38014759931603
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 6.80525891616305
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "C11orf24",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 10.1038091828713
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 11.7735513464285
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 11.1887948508175
            },
            "DTB-132" : {
                "rsem_quan_log2" : 11.5668831116407
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 10.6364765373349
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 11.2532613670857
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 12.0279059965699
            },
            "DTB-131" : {
                "rsem_quan_log2" : 9.98353234633853
            },
            "DTB-124" : {
                "rsem_quan_log2" : 10.8814326799862
            },
            "DTB-060" : {
                "rsem_quan_log2" : 11.6405462345774
            },
            "DTB-061" : {
                "rsem_quan_log2" : 11.4054278990358
            },
            "DTB-004" : {
                "rsem_quan_log2" : 10.9665054519057
            },
            "DTB-005" : {
                "rsem_quan_log2" : 9.92226223174624
            },
            "DTB-002" : {
                "rsem_quan_log2" : 10.4205552457913
            },
            "DTB-003" : {
                "rsem_quan_log2" : 8.70620831373997
            },
            "DTB-001" : {
                "rsem_quan_log2" : 10.1743583521976
            },
            "DTB-069" : {
                "rsem_quan_log2" : 9.3203445445823
            },
            "DTB-040" : {
                "rsem_quan_log2" : 9.07621568523333
            },
            "DTB-046" : {
                "rsem_quan_log2" : 10.3728650601126
            },
            "DTB-008" : {
                "rsem_quan_log2" : 10.8172064880295
            },
            "DTB-009" : {
                "rsem_quan_log2" : 8.95170784345649
            },
            "DTB-121" : {
                "rsem_quan_log2" : 10.8421229988814
            },
            "DTB-120" : {
                "rsem_quan_log2" : 10.5286401741928
            },
            "DTB-020" : {
                "rsem_quan_log2" : 11.5980501732322
            },
            "DTB-102" : {
                "rsem_quan_log2" : 7.1684926161492
            },
            "DTB-022" : {
                "rsem_quan_log2" : 10.2032428867636
            },
            "DTB-023" : {
                "rsem_quan_log2" : 9.81325098352233
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 11.0800458857367
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 9.50349225010515
            },
            "DTB-089" : {
                "rsem_quan_log2" : 11.1094279490746
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 9.73044432298668
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 12.2264456405269
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 9.87466112293048
            },
            "DTB-085" : {
                "rsem_quan_log2" : 10.803093247007
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 10.4813669618913
            },
            "DTB-083" : {
                "rsem_quan_log2" : 11.2856648972293
            },
            "DTB-080" : {
                "rsem_quan_log2" : 10.5616171208778
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 10.8634653911018
            },
            "DTB-063" : {
                "rsem_quan_log2" : 11.5965203824685
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 11.4532293180083
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 10.1230201257029
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 9.51269622342718
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 10.1606599374215
            },
            "DTB-073" : {
                "rsem_quan_log2" : 10.8846060098762
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 11.2353178577283
            },
            "DTB-071" : {
                "rsem_quan_log2" : 9.77839422468835
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 9.46335679839291
            },
            "DTB-059" : {
                "rsem_quan_log2" : 11.3277452338207
            },
            "DTB-156" : {
                "rsem_quan_log2" : 9.26142926639818
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 9.84985496398714
            },
            "DTB-053" : {
                "rsem_quan_log2" : 10.3454052467178
            },
            "DTB-018" : {
                "rsem_quan_log2" : 10.1714755659987
            },
            "DTB-118" : {
                "rsem_quan_log2" : 11.0195907283579
            },
            "DTB-038" : {
                "rsem_quan_log2" : 9.03850285164352
            },
            "DTB-011" : {
                "rsem_quan_log2" : 9.11690767191121
            },
            "DTB-036" : {
                "rsem_quan_log2" : 9.6772915257514
            },
            "DTB-035" : {
                "rsem_quan_log2" : 9.71752066527716
            },
            "DTB-034" : {
                "rsem_quan_log2" : 11.5536055367665
            },
            "DTB-110" : {
                "rsem_quan_log2" : 10.9622074528965
            },
            "DTB-032" : {
                "rsem_quan_log2" : 9.07698256598116
            },
            "DTB-031" : {
                "rsem_quan_log2" : 10.3793630952186
            },
            "DTB-030" : {
                "rsem_quan_log2" : 9.92744065195394
            },
            "DTB-049" : {
                "rsem_quan_log2" : 12.0912865469992
            },
            "DTB-095" : {
                "rsem_quan_log2" : 11.338310362576
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 10.3894495794238
            },
            "DTB-097" : {
                "rsem_quan_log2" : 10.5586564234937
            },
            "DTB-064" : {
                "rsem_quan_log2" : 10.6232914003333
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 8.61792361907757
            },
            "DTB-065" : {
                "rsem_quan_log2" : 10.9939725575276
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "SETX",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 12.5150615213368
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 12.5235111129021
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 13.8800112182028
            },
            "DTB-132" : {
                "rsem_quan_log2" : 12.5013648488303
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 12.380202888325
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 12.025315007972
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 12.8407779235951
            },
            "DTB-131" : {
                "rsem_quan_log2" : 12.6323979176972
            },
            "DTB-124" : {
                "rsem_quan_log2" : 12.8708623519778
            },
            "DTB-060" : {
                "rsem_quan_log2" : 12.2564052909901
            },
            "DTB-061" : {
                "rsem_quan_log2" : 12.5182559419015
            },
            "DTB-004" : {
                "rsem_quan_log2" : 11.3331259369258
            },
            "DTB-005" : {
                "rsem_quan_log2" : 12.7108218633952
            },
            "DTB-002" : {
                "rsem_quan_log2" : 12.2754033720761
            },
            "DTB-003" : {
                "rsem_quan_log2" : 12.5877706731191
            },
            "DTB-001" : {
                "rsem_quan_log2" : 11.9024778858875
            },
            "DTB-069" : {
                "rsem_quan_log2" : 11.6211068926792
            },
            "DTB-040" : {
                "rsem_quan_log2" : 12.0379180810457
            },
            "DTB-046" : {
                "rsem_quan_log2" : 12.0450770519349
            },
            "DTB-008" : {
                "rsem_quan_log2" : 12.4823823190714
            },
            "DTB-009" : {
                "rsem_quan_log2" : 12.4752795793132
            },
            "DTB-121" : {
                "rsem_quan_log2" : 11.5591518729372
            },
            "DTB-120" : {
                "rsem_quan_log2" : 12.1062891949878
            },
            "DTB-020" : {
                "rsem_quan_log2" : 12.6918099827927
            },
            "DTB-102" : {
                "rsem_quan_log2" : 12.1736920003576
            },
            "DTB-022" : {
                "rsem_quan_log2" : 12.3246965385344
            },
            "DTB-023" : {
                "rsem_quan_log2" : 12.5844708815624
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 12.1278577484066
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 13.5256365797481
            },
            "DTB-089" : {
                "rsem_quan_log2" : 12.3478915025932
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 12.0714725190403
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 13.3031623769043
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 12.6603934704322
            },
            "DTB-085" : {
                "rsem_quan_log2" : 12.6180904859304
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 12.6418172585077
            },
            "DTB-083" : {
                "rsem_quan_log2" : 13.2062512720607
            },
            "DTB-080" : {
                "rsem_quan_log2" : 12.1998098298215
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 14.0851662191399
            },
            "DTB-063" : {
                "rsem_quan_log2" : 12.3730365195603
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 12.904114043725
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 12.1723345555849
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 12.076202388148
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 11.9887801059658
            },
            "DTB-073" : {
                "rsem_quan_log2" : 12.4721784443079
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 12.6899013373077
            },
            "DTB-071" : {
                "rsem_quan_log2" : 12.3787179013254
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 12.9260032744383
            },
            "DTB-059" : {
                "rsem_quan_log2" : 11.9125206086954
            },
            "DTB-156" : {
                "rsem_quan_log2" : 12.5278738636589
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 12.5705522760377
            },
            "DTB-053" : {
                "rsem_quan_log2" : 12.0704564159446
            },
            "DTB-018" : {
                "rsem_quan_log2" : 12.9377004495407
            },
            "DTB-118" : {
                "rsem_quan_log2" : 12.3283009392588
            },
            "DTB-038" : {
                "rsem_quan_log2" : 11.9549833243382
            },
            "DTB-011" : {
                "rsem_quan_log2" : 12.5426356532498
            },
            "DTB-036" : {
                "rsem_quan_log2" : 11.4488351502163
            },
            "DTB-035" : {
                "rsem_quan_log2" : 12.808050037777
            },
            "DTB-034" : {
                "rsem_quan_log2" : 10.9449294370697
            },
            "DTB-110" : {
                "rsem_quan_log2" : 11.7550365646011
            },
            "DTB-032" : {
                "rsem_quan_log2" : 12.0798597424719
            },
            "DTB-031" : {
                "rsem_quan_log2" : 12.9659646102721
            },
            "DTB-030" : {
                "rsem_quan_log2" : 12.0793956793228
            },
            "DTB-049" : {
                "rsem_quan_log2" : 12.2857004085992
            },
            "DTB-095" : {
                "rsem_quan_log2" : 12.1501019077376
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 13.1884144631589
            },
            "DTB-097" : {
                "rsem_quan_log2" : 12.9566429984802
            },
            "DTB-064" : {
                "rsem_quan_log2" : 12.4718791584477
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 12.6616388977019
            },
            "DTB-065" : {
                "rsem_quan_log2" : 11.8049066646621
            }
        }
    }, {
        "Study_ID" : "prad_wcdt",
        "gene" : "MIR155HG",
        "samples" : {
            "DTB-067Pro" : {
                "rsem_quan_log2" : 0
            },
            "DTB-073Pro" : {
                "rsem_quan_log2" : 4.31236748535643
            },
            "DTB-080Pro" : {
                "rsem_quan_log2" : 6.9862539141556
            },
            "DTB-132" : {
                "rsem_quan_log2" : 5.20102999829742
            },
            "DTB-097Pro" : {
                "rsem_quan_log2" : 3.07618280980422
            },
            "DTB-055Pro2" : {
                "rsem_quan_log2" : 2.94893718795695
            },
            "DTB-024Pro" : {
                "rsem_quan_log2" : 6.91886323727459
            },
            "DTB-131" : {
                "rsem_quan_log2" : 2.73111805809481
            },
            "DTB-124" : {
                "rsem_quan_log2" : 4.44845829822676
            },
            "DTB-060" : {
                "rsem_quan_log2" : 4.14296067590559
            },
            "DTB-061" : {
                "rsem_quan_log2" : 4.33848146536253
            },
            "DTB-004" : {
                "rsem_quan_log2" : 0
            },
            "DTB-005" : {
                "rsem_quan_log2" : 0
            },
            "DTB-002" : {
                "rsem_quan_log2" : 0
            },
            "DTB-003" : {
                "rsem_quan_log2" : 4.09439654807329
            },
            "DTB-001" : {
                "rsem_quan_log2" : 0
            },
            "DTB-069" : {
                "rsem_quan_log2" : 0
            },
            "DTB-040" : {
                "rsem_quan_log2" : 3.72736504617899
            },
            "DTB-046" : {
                "rsem_quan_log2" : 0
            },
            "DTB-008" : {
                "rsem_quan_log2" : 1.90002629896485
            },
            "DTB-009" : {
                "rsem_quan_log2" : 3.66784672105264
            },
            "DTB-121" : {
                "rsem_quan_log2" : 3.21171311689092
            },
            "DTB-120" : {
                "rsem_quan_log2" : 7.44683021566853
            },
            "DTB-020" : {
                "rsem_quan_log2" : 1.79464459986288
            },
            "DTB-102" : {
                "rsem_quan_log2" : 0
            },
            "DTB-022" : {
                "rsem_quan_log2" : 2.83491342970104
            },
            "DTB-023" : {
                "rsem_quan_log2" : 4.19235989206541
            },
            "DTB-089Pro" : {
                "rsem_quan_log2" : 5.12508485506714
            },
            "DTB-080Pro-R2" : {
                "rsem_quan_log2" : 8.33604991306193
            },
            "DTB-089" : {
                "rsem_quan_log2" : 4.33354538442796
            },
            "LNCAP-batch3" : {
                "rsem_quan_log2" : 0
            },
            "DTB-024Pro2" : {
                "rsem_quan_log2" : 5.19202052632839
            },
            "LNCAP-batch1" : {
                "rsem_quan_log2" : 4.04894236130886
            },
            "DTB-085" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch7" : {
                "rsem_quan_log2" : 0
            },
            "DTB-083" : {
                "rsem_quan_log2" : 4.82133775982539
            },
            "DTB-080" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch4" : {
                "rsem_quan_log2" : 4.74750018971816
            },
            "DTB-063" : {
                "rsem_quan_log2" : 0
            },
            "LNCAP-batch6" : {
                "rsem_quan_log2" : 3.42390082530867
            },
            "DTB-063Pro" : {
                "rsem_quan_log2" : 4.10887567890195
            },
            "DTB-069Dup" : {
                "rsem_quan_log2" : 3.60809954599438
            },
            "DTB-111Pro" : {
                "rsem_quan_log2" : 3.97961382663014
            },
            "DTB-073" : {
                "rsem_quan_log2" : 3.73008559370039
            },
            "DTB-010Pro" : {
                "rsem_quan_log2" : 7.50245711207058
            },
            "DTB-071" : {
                "rsem_quan_log2" : 5.17343529286531
            },
            "DTB-080Pro-R3" : {
                "rsem_quan_log2" : 8.18297776956259
            },
            "DTB-059" : {
                "rsem_quan_log2" : 0
            },
            "DTB-156" : {
                "rsem_quan_log2" : 2.76134910801311
            },
            "LNCAP-batch2" : {
                "rsem_quan_log2" : 3.36611235243137
            },
            "DTB-053" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018" : {
                "rsem_quan_log2" : 5.77429421931654
            },
            "DTB-118" : {
                "rsem_quan_log2" : 3.22238726884496
            },
            "DTB-038" : {
                "rsem_quan_log2" : 0
            },
            "DTB-011" : {
                "rsem_quan_log2" : 4.46494919928112
            },
            "DTB-036" : {
                "rsem_quan_log2" : 0
            },
            "DTB-035" : {
                "rsem_quan_log2" : 0
            },
            "DTB-034" : {
                "rsem_quan_log2" : 0
            },
            "DTB-110" : {
                "rsem_quan_log2" : 6.23658445811318
            },
            "DTB-032" : {
                "rsem_quan_log2" : 0
            },
            "DTB-031" : {
                "rsem_quan_log2" : 3.00760815365129
            },
            "DTB-030" : {
                "rsem_quan_log2" : 4.19587512505077
            },
            "DTB-049" : {
                "rsem_quan_log2" : 5.60906937734359
            },
            "DTB-095" : {
                "rsem_quan_log2" : 3.06227716635985
            },
            "LNCAP-batch5" : {
                "rsem_quan_log2" : 0
            },
            "DTB-097" : {
                "rsem_quan_log2" : 4.09618593750069
            },
            "DTB-064" : {
                "rsem_quan_log2" : 0
            },
            "DTB-018Pro" : {
                "rsem_quan_log2" : 3.14790905288568
            },
            "DTB-065" : {
                "rsem_quan_log2" : 0
            }
        }
    }],
    'mutation' : []
};
abiObsDeckSettings["signature"] = {
    'expression' : {
        'object' : [[{
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b391"
            },
            "name" : "adeno50_v5",
            "val" : 0.230036031416529,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b392"
            },
            "name" : "adeno50_v5",
            "val" : 1.4155068969657,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b393"
            },
            "name" : "adeno50_v5",
            "val" : 2.31103355899602,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b394"
            },
            "name" : "adeno50_v5",
            "val" : -1.55978305404136,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b395"
            },
            "name" : "adeno50_v5",
            "val" : -2.69743840700891,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b396"
            },
            "name" : "adeno50_v5",
            "val" : 0.999898960968374,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b397"
            },
            "name" : "adeno50_v5",
            "val" : 1.10486638003748,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b398"
            },
            "name" : "adeno50_v5",
            "val" : 1.52407602807661,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b399"
            },
            "name" : "adeno50_v5",
            "val" : 0.465562664905339,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b39a"
            },
            "name" : "adeno50_v5",
            "val" : -0.0258497608657958,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b39b"
            },
            "name" : "adeno50_v5",
            "val" : -1.41532679720372,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b39c"
            },
            "name" : "adeno50_v5",
            "val" : -2.05163069371923,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b39d"
            },
            "name" : "adeno50_v5",
            "val" : -0.427624310959136,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b39e"
            },
            "name" : "adeno50_v5",
            "val" : -1.27808563188809,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b39f"
            },
            "name" : "adeno50_v5",
            "val" : 0.766228754169561,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a0"
            },
            "name" : "adeno50_v5",
            "val" : -1.45580647209539,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a1"
            },
            "name" : "adeno50_v5",
            "val" : 2.13022266109498,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a2"
            },
            "name" : "adeno50_v5",
            "val" : 1.28704513438178,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a3"
            },
            "name" : "adeno50_v5",
            "val" : -2.49373087833187,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a4"
            },
            "name" : "adeno50_v5",
            "val" : 2.20211347850504,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a5"
            },
            "name" : "adeno50_v5",
            "val" : -2.07742065595545,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a6"
            },
            "name" : "adeno50_v5",
            "val" : 3.41590306032981,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a7"
            },
            "name" : "adeno50_v5",
            "val" : -2.68137940815437,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a8"
            },
            "name" : "adeno50_v5",
            "val" : 0.509962606756574,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3a9"
            },
            "name" : "adeno50_v5",
            "val" : -2.25078365647433,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3aa"
            },
            "name" : "adeno50_v5",
            "val" : 1.27678352472296,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ab"
            },
            "name" : "adeno50_v5",
            "val" : 1.56710972746889,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ac"
            },
            "name" : "adeno50_v5",
            "val" : -1.12582641751184,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ad"
            },
            "name" : "adeno50_v5",
            "val" : 2.29172732012026,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ae"
            },
            "name" : "adeno50_v5",
            "val" : -1.7301408071271,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3af"
            },
            "name" : "adeno50_v5",
            "val" : -1.73443410374507,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b0"
            },
            "name" : "adeno50_v5",
            "val" : 1.86153661724559,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b1"
            },
            "name" : "adeno50_v5",
            "val" : 1.53921052618474,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b2"
            },
            "name" : "adeno50_v5",
            "val" : 1.0486042272753,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b3"
            },
            "name" : "adeno50_v5",
            "val" : 1.91853422237775,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b4"
            },
            "name" : "adeno50_v5",
            "val" : -0.958603999879869,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b5"
            },
            "name" : "adeno50_v5",
            "val" : -0.536955975383575,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b6"
            },
            "name" : "adeno50_v5",
            "val" : 1.1224214606072,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b7"
            },
            "name" : "adeno50_v5",
            "val" : 0.0523998805390835,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b8"
            },
            "name" : "adeno50_v5",
            "val" : 0.513619233748081,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3b9"
            },
            "name" : "adeno50_v5",
            "val" : 1.02462861081501,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ba"
            },
            "name" : "adeno50_v5",
            "val" : 0.815366307605897,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3bb"
            },
            "name" : "adeno50_v5",
            "val" : 2.06875378913259,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3bc"
            },
            "name" : "adeno50_v5",
            "val" : -1.94913125378002,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3bd"
            },
            "name" : "adeno50_v5",
            "val" : -1.66967989820452,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3be"
            },
            "name" : "adeno50_v5",
            "val" : -1.80670261258624,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3bf"
            },
            "name" : "adeno50_v5",
            "val" : 1.25164976084124,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c0"
            },
            "name" : "adeno50_v5",
            "val" : 1.95378459733846,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c1"
            },
            "name" : "adeno50_v5",
            "val" : -1.69553649202618,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c2"
            },
            "name" : "adeno50_v5",
            "val" : -1.07628568300519,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c3"
            },
            "name" : "adeno50_v5",
            "val" : -2.36284879418879,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c4"
            },
            "name" : "adeno50_v5",
            "val" : -1.52816053054204,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c5"
            },
            "name" : "adeno50_v5",
            "val" : 0.700160600257934,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c6"
            },
            "name" : "adeno50_v5",
            "val" : -0.0788677970808448,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c7"
            },
            "name" : "adeno50_v5",
            "val" : -2.15993397390093,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c8"
            },
            "name" : "adeno50_v5",
            "val" : 1.85445441647539,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3c9"
            },
            "name" : "adeno50_v5",
            "val" : -1.08881589963515,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ca"
            },
            "name" : "adeno50_v5",
            "val" : 0.868277649426426,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3cb"
            },
            "name" : "adeno50_v5",
            "val" : 1.15016619283866,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3cc"
            },
            "name" : "adeno50_v5",
            "val" : 0.507997873256226,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3cd"
            },
            "name" : "adeno50_v5",
            "val" : -0.81054186345228,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b3ce"
            },
            "name" : "adeno50_v5",
            "val" : 1.8902922251116,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b353"
            },
            "name" : "adeno20k_v5",
            "val" : -0.10562634445712,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b354"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0591822032116719,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b355"
            },
            "name" : "adeno20k_v5",
            "val" : -0.031286383554246,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b356"
            },
            "name" : "adeno20k_v5",
            "val" : -0.175124529557319,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b357"
            },
            "name" : "adeno20k_v5",
            "val" : -0.124577104791598,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b358"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0737913299418104,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b359"
            },
            "name" : "adeno20k_v5",
            "val" : -0.106232533276754,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0737146113088622,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.103064390040514,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0959244190977974,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.135907601346208,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.111723669456106,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b35f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.106087324202886,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b360"
            },
            "name" : "adeno20k_v5",
            "val" : -0.110303190142414,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b361"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0735679320305563,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b362"
            },
            "name" : "adeno20k_v5",
            "val" : -0.149385688548283,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b363"
            },
            "name" : "adeno20k_v5",
            "val" : 0.0203635014209106,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b364"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0288420939032702,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b365"
            },
            "name" : "adeno20k_v5",
            "val" : -0.173942255875349,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b366"
            },
            "name" : "adeno20k_v5",
            "val" : 0.0187686819514892,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b367"
            },
            "name" : "adeno20k_v5",
            "val" : -0.137402561148301,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b368"
            },
            "name" : "adeno20k_v5",
            "val" : 0.0102137710790084,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b369"
            },
            "name" : "adeno20k_v5",
            "val" : -0.145549813606209,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0704647514418632,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.13034628102345,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0826557512355797,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0391264382947629,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0958181499847976,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b36f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0374485098849909,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b370"
            },
            "name" : "adeno20k_v5",
            "val" : -0.121355327733924,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b371"
            },
            "name" : "adeno20k_v5",
            "val" : -0.146571908399095,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b372"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0617993409545593,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b373"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0482842457139326,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b374"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0757646694780516,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b375"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0605011146627951,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b376"
            },
            "name" : "adeno20k_v5",
            "val" : -0.132943036208026,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b377"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0964234669144823,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b378"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0811377425286431,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b379"
            },
            "name" : "adeno20k_v5",
            "val" : -0.123793193416427,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.119033687713133,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.115669271980734,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.10695921837442,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0801787191444682,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.158805516642751,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b37f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.164413066036133,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b380"
            },
            "name" : "adeno20k_v5",
            "val" : -0.152940682006058,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b381"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0473555012864845,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b382"
            },
            "name" : "adeno20k_v5",
            "val" : 0.00610191278048144,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b383"
            },
            "name" : "adeno20k_v5",
            "val" : -0.144201794442167,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b384"
            },
            "name" : "adeno20k_v5",
            "val" : -0.163953740597342,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b385"
            },
            "name" : "adeno20k_v5",
            "val" : -0.162610087795849,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b386"
            },
            "name" : "adeno20k_v5",
            "val" : -0.148277283213144,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b387"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0882396632961423,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b388"
            },
            "name" : "adeno20k_v5",
            "val" : -0.105495128101961,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b389"
            },
            "name" : "adeno20k_v5",
            "val" : -0.129415302967839,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38a"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0539213983366026,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38b"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0904533022618497,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38c"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0488433351889508,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38d"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0803005906937496,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38e"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0678674134037319,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b38f"
            },
            "name" : "adeno20k_v5",
            "val" : -0.100396037155273,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b390"
            },
            "name" : "adeno20k_v5",
            "val" : -0.0538935146235054,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b40d"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.1407187492222,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b40e"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.35435725309766,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b40f"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.018106662751816,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b410"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.63887361476459,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b411"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -3.48783076533126,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b412"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.63037917905528,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b413"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.463353551170792,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b414"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.984526694106421,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b415"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.0220315182446679,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b416"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.721855041461271,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b417"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.26727697004771,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b418"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.64196232486424,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b419"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.35429010810675,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b41a"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.80617960152415,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b41b"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.18117801760846,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b41c"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.02225172525206,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b41d"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.00846297296037002,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b41e"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.80373764249297,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b41f"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.5095091813596,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b420"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.0715023317160419,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b421"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.37299210140199,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b422"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.78460531155728,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b423"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -3.39254539204551,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b424"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.20284026339752,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b425"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.75040905693879,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b426"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.219508536523147,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b427"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.387208399578554,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b428"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.190224525870949,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b429"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.67709247081821,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b42a"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.10530410790302,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b42b"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -3.00097571076011,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b42c"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.66323378440514,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b42d"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.73964956163966,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b42e"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.864704887819843,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b42f"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.59169981707847,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b430"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.92133423161018,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b431"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.27198883290523,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b432"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.18517458208536,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b433"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.861673008264372,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b434"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.27269111819293,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b435"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.967445234482434,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b436"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.00630869544732093,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b437"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.77410323390397,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b438"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.69244603782826,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b439"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.26318535445119,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b43a"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.4358408536925,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b43b"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 1.3922263139201,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b43c"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.902919005005916,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b43d"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.32247374245617,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b43e"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.30075455966419,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b43f"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -3.05149593276352,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b440"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.29640364849514,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b441"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.85991154699136,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b442"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.557548503641897,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b443"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.14740912577877,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b444"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.549752423130392,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b445"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -2.19164189558132,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b446"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.0711249924940391,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b447"
            },
            "name" : "iac-adeno-50_v5",
            "val" : 0.0401849194634626,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b448"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.92111641098074,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b449"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -1.53280695111904,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b44a"
            },
            "name" : "iac-adeno-50_v5",
            "val" : -0.701804273510724,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b505"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.54402822425404,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b506"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.28651459201785,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b507"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.194638444684382,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b508"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.64491974699961,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b509"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.10869357971709,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.79804387472692,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.43885326792729,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.071732663380232,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.87551248517154,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.30641480516501,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b50f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.50422900770783,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b510"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.0580647670189,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b511"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.79263657664497,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b512"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.89980396143146,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b513"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.85710353878168,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b514"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.22250770430289,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b515"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 2.18226742579345,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b516"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.43870041390178,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b517"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -4.09760728076294,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b518"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 2.05813498024574,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b519"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.04753902055037,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.290021221143811,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.62418640242889,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.54206265998976,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.49106578066357,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.45995987734852,
            "id" : "DTB-055Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b51f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.47134368740066,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b520"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.29175180370533,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b521"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.05378309076865,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b522"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.30720188171506,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b523"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.11715664192894,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b524"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.67392064496965,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b525"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.95437204616153,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b526"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 0.596162380783887,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b527"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.47532013650408,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b528"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.94077093081395,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b529"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.54134472246018,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.02033224785088,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.87934793076506,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.59540252943428,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.63350187439237,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.33838900869974,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b52f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.52298455121419,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b530"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.01764356206205,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b531"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.9839448224079,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b532"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.48346816626262,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b533"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.44348161872316,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b534"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 2.04920727029903,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b535"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.16512281252573,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b536"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.0241728696463,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b537"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.94456631331895,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b538"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.1089893573852,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b539"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 1.14024777292728,
            "id" : "DTB-008"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53a"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -3.49368423957964,
            "id" : "DTB-018Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53b"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.98777237501457,
            "id" : "DTB-063Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53c"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 1.28818618952595,
            "id" : "DTB-069Dup"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53d"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -2.38217149041764,
            "id" : "DTB-097"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53e"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.83655874033929,
            "id" : "DTB-097Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b53f"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.10102706677807,
            "id" : "DTB-111Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b540"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.18104148349823,
            "id" : "DTB-120"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b541"
            },
            "name" : "smc-adeno-50_v5",
            "val" : -1.99739651319768,
            "id" : "DTB-131"
        }, {
            "_id" : {
                "$oid" : "55bc3e6f08e9861a7510b542"
            },
            "name" : "smc-adeno-50_v5",
            "val" : 1.51129728202979,
            "id" : "DTB-156"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d2"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -2.1758487888189,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d3"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.11405535735032,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d4"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -3.32500532938632,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d5"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.0752093597585835,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d6"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 4.06369773538695,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d7"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -0.211070791925601,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d8"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.256982883454858,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3d9"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -0.850428089737972,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3da"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 1.35241732742423,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3db"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.62390313052046,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3dc"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 3.27896973806322,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3dd"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.77993699243676,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3de"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 2.32918053259525,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3df"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.817934136985614,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e0"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.148868744851656,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e1"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 2.33976451401856,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e2"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.62584789941461,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e3"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.39039639367722,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e4"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.110908032935528,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e5"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -3.29451266733923,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e6"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.9468617027752,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e7"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -2.77996102813457,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e8"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.916810588963567,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3e9"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.34203272906197,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3ea"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.85246872760006,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3eb"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.42339605131053,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3ec"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.03380833049824,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3ed"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.48385449611043,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3ee"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 1.67124378853115,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3ef"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -2.13529128208096,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f0"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.851035147144857,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f1"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.93479641940184,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f2"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.33270083042881,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f3"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -2.12096443148214,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f4"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.60577616928705,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f5"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 4.9856534459266,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f6"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 2.18292540801403,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f7"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -2.07801645414351,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f8"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 2.0274791810762,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3f9"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 2.19087706351319,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3fa"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 2.0395388192239,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3fb"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -0.105197976707042,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3fc"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -0.0156350530303285,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3fd"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.258870230662108,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3fe"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.677615140997563,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a3ff"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.634898501953575,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a400"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -0.390797405651047,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a401"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -2.28715890596061,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a402"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : -1.66190316216797,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a403"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.459141365707884,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a404"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 1.2445443697104,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a405"
            },
            "name" : "RUNX2_tf_viper_v5",
            "val" : 0.353127761105555,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7ae"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.40491057270752,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7af"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.640409913108,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b0"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.551656615359996,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b1"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.725732980783359,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b2"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 4.11497461726411,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b3"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.19201117171287,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b4"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.501592135143198,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b5"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.64797214908048,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b6"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.80885062653739,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b7"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.970472973343513,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b8"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 4.30099552121198,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7b9"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.05138651983262,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7ba"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.76875930639244,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7bb"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.29381400523784,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7bc"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.91804621605154,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7bd"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.8199540681236,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7be"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.71490316237856,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7bf"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.15898158689712,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c0"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.06961688907502,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c1"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.648714665947136,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c2"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.939587866800555,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c3"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -2.0340686708588,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c4"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.695174959673612,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c5"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.02494857956993,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c6"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.166800546828701,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c7"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.17317472407576,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c8"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.41380639843123,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7c9"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.223561779630764,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7ca"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 2.61226528224588,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7cb"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 2.86516664653101,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7cc"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.73709404296022,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7cd"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.00504093430117,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7ce"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.66765734573905,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7cf"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.59044422712756,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d0"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.29235655977208,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d1"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 3.74145561790881,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d2"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.30482287580126,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d3"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.54434801624268,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d4"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.33692922139836,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d5"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.784126097128438,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d6"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.844854956837807,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d7"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.5482364490226,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d8"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 1.59316829616248,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7d9"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 3.40031333445151,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7da"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 2.24009155949416,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7db"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 2.01551048092129,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7dc"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.819235432067136,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7dd"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -5.32670575088856,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7de"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -1.24046302160675,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7df"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : -0.214285262460201,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7e0"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.643777247362728,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a7e1"
            },
            "name" : "SNAI2_tf_viper_v5",
            "val" : 0.161190529171441,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fde"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.484715875294951,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fdf"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.768473932923706,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe0"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -1.6300428648161,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe1"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.31005916487219,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe2"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 2.20425443342503,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe3"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -1.52865225879157,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe4"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.194740393893461,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe5"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.472878141434898,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe6"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.144173504727328,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe7"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.889951292458496,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe8"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.613566163943,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fe9"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.86455570343447,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fea"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.731278094616176,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107feb"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.935171041726087,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fec"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.5905651568707,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fed"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.24906633994146,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fee"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.42189244576478,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fef"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.315484503871077,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff0"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.398039674327156,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff1"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.67862539414193,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff2"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.06028061619648,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff3"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.04874696985603,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff4"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.38796802305243,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff5"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.654050584212643,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff6"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.447523989096451,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff7"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.84213695362094,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff8"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -2.38307759084833,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ff9"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.801410082773492,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ffa"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.540549514363617,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ffb"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.87805454301969,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ffc"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.20009561245056,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ffd"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.602914736007343,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107ffe"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.576143971286211,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75107fff"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.368169187811564,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108000"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.542844490187289,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108001"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.4759391979532,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108002"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.908774346090097,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108003"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.586251069391274,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108004"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.329850487038903,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108005"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.267447927962382,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108006"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.288487672191819,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108007"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.411838376547241,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108008"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.38808652452694,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108009"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.82752924265464,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510800a"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.02014202837513,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510800b"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 1.12405136990302,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510800c"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.326728325588652,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510800d"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -3.19501142451009,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510800e"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -1.16723665235637,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510800f"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.407470003406087,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108010"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : -0.519137771963979,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108011"
            },
            "name" : "DLX5_tf_viper_v5",
            "val" : 0.0891676715508944,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108762"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.36639042522259,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108763"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.235721974478964,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108764"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.70370226989395,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108765"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.138134174587525,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108766"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 2.61421922680082,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108767"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.207192235625883,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108768"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.256849016105123,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108769"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.376968212635104,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510876a"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.37624710223985,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510876b"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.29102392882589,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510876c"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.56571227839964,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510876d"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.132895891006581,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510876e"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 2.61984927321258,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510876f"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.80133487991706,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108770"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.0788513230403,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108771"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.252433911788533,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108772"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.475145293782147,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108773"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.505936261763521,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108774"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.47806599181754,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108775"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.05274478177143,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108776"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.406401924893825,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108777"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.957618295126061,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108778"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.379296286937962,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108779"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.935280450900363,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510877a"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.719566935779011,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510877b"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.21958374502961,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510877c"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.31871932039702,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510877d"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.486812382547783,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510877e"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.33400342641232,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510877f"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.8044071346766,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108780"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.506287792458973,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108781"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.08272041123038,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108782"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.580370438863913,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108783"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.0829042124416,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108784"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.286172751555507,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108785"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.74359819652903,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108786"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.729326281411223,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108787"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.28567631183111,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108788"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.05156290862256,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108789"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.402405799566384,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510878a"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.995217794463609,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510878b"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.76438709278727,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510878c"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.500818176014447,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510878d"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 1.23627519660678,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510878e"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 2.09912793847967,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510878f"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 2.24396412273419,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108790"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.237545503873246,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108791"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.04181531583587,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108792"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -1.82044039359927,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108793"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.0223429995866045,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108794"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : 0.947222555015951,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a75108795"
            },
            "name" : "FOXC2_tf_viper_v5",
            "val" : -0.35233737767889,
            "id" : "DTB-132"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0c6"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.98103999007067,
            "id" : "DTB-001"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0c7"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.898113503095918,
            "id" : "DTB-002"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0c8"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 2.1958640181665,
            "id" : "DTB-003"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0c9"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.0852116844154,
            "id" : "DTB-004"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ca"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 2.00708373132401,
            "id" : "DTB-005"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0cb"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.444998909250273,
            "id" : "DTB-009"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0cc"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.852637498831645,
            "id" : "DTB-010Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0cd"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.81231987404226,
            "id" : "DTB-011"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ce"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 2.3072813028929,
            "id" : "DTB-018"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0cf"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 3.56876055468748,
            "id" : "DTB-020"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d0"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.50694301302745,
            "id" : "DTB-022"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d1"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 2.37300052380375,
            "id" : "DTB-023"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d2"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.90285160601466,
            "id" : "DTB-024Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d3"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 3.25005169452031,
            "id" : "DTB-024Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d4"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.423340447753,
            "id" : "DTB-030"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d5"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.77932179706179,
            "id" : "DTB-031"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d6"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.816652787693484,
            "id" : "DTB-032"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d7"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.555244968107865,
            "id" : "DTB-034"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d8"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.12798851969529,
            "id" : "DTB-035"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0d9"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.690446492469244,
            "id" : "DTB-036"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0da"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.348195975608256,
            "id" : "DTB-038"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0db"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.92483676607841,
            "id" : "DTB-040"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0dc"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.748579715167441,
            "id" : "DTB-046"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0dd"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 2.88270483760977,
            "id" : "DTB-049"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0de"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.991689628800208,
            "id" : "DTB-053"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0df"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.934402309128291,
            "id" : "DTB-055Pro2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e0"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.61986204375097,
            "id" : "DTB-059"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e1"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.385452965680064,
            "id" : "DTB-060"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e2"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 3.7939134974606,
            "id" : "DTB-061"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e3"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.73274961390718,
            "id" : "DTB-063"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e4"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 3.05779352189946,
            "id" : "DTB-064"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e5"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.0667020005833623,
            "id" : "DTB-065"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e6"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.548882055664284,
            "id" : "DTB-067Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e7"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -3.35181908314483,
            "id" : "DTB-069"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e8"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.02970227942205,
            "id" : "DTB-071"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0e9"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.87748599796882,
            "id" : "DTB-073"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ea"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.43696108322205,
            "id" : "DTB-073Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0eb"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.54914793847383,
            "id" : "DTB-080"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ec"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.447001896322104,
            "id" : "DTB-080Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ed"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.895081921028466,
            "id" : "DTB-080Pro-R2"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ee"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.0720323097615758,
            "id" : "DTB-080Pro-R3"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0ef"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.210895619682984,
            "id" : "DTB-083"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f0"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.755903951080541,
            "id" : "DTB-085"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f1"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.617293433611163,
            "id" : "DTB-089"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f2"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -0.59668876531577,
            "id" : "DTB-089Pro"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f3"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.657619257785806,
            "id" : "DTB-095"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f4"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 0.135212435553752,
            "id" : "DTB-102"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f5"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.18754452970912,
            "id" : "DTB-110"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f6"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.33069932822876,
            "id" : "DTB-118"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f7"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.08059236713375,
            "id" : "DTB-121"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f8"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : 1.91901423885368,
            "id" : "DTB-124"
        }, {
            "_id" : {
                "$oid" : "55bc3cd108e9861a7510a0f9"
            },
            "name" : "PPARG_tf_viper_v5",
            "val" : -1.73514696889543,
            "id" : "DTB-132"
        }]]
    }
};

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
        var pivotSettings = Session.get("pivotSettings");
        console.log(pivotSettings);

        // obsDeckSettings can be one of the following:
        // enzObsDeckSettings
        // abiObsDeckSettings
        // smcObsDeckSettings
        // adenoObsDeckSettings

        var obsDeckSettings;
        if ( typeof pivotSettings === "undefined") {
            // default to enzalutamide settings
            obsDeckSettings = enzObsDeckSettings;
        } else if (pivotSettings["name"] === "Enzalutamide") {
            obsDeckSettings = enzObsDeckSettings;
        } else if (pivotSettings["name"] === "Adeno") {
            obsDeckSettings = adenoObsDeckSettings;
        } else if (pivotSettings["name"] === "Small_Cell") {
            obsDeckSettings = smcObsDeckSettings;
        } else if (pivotSettings["name"] === "Enzalutamide") {
            obsDeckSettings = enzObsDeckSettings;
        } else {
            // default to enzalutamide settings
            obsDeckSettings = enzObsDeckSettings
        }

        od_config = observation_deck.buildObservationDeck(divElem, obsDeckSettings);
    });
};

