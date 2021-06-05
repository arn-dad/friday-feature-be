package com.friday.feature.enums;

public enum FeatureList {
    PERMISSION("PERMISSION", 0),
    OPS("OPS", 1),
    EXPERIMENT("EXPERIMENT", 2),
    RELEASE("RELEASE", 3);

    private final String key;
    private final Integer priority;

    FeatureList(String key, Integer priority) {
        this.key = key;
        this.priority = priority;
    }

    public String getKey() {
        return key;
    }

    public Integer getPriority() {
        return priority;
    }
}
