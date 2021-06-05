package com.friday.feature.model;

import com.friday.feature.enums.FeatureList;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@NoArgsConstructor
@Accessors(chain = true)
@Document(collection = "feature")
public class Feature {
    @Id
    private String id;

    @NotNull
    @Size(min = 10, message = "label must not be less than two characters")
    private String label;

    @NotNull
    @Indexed(unique=true)
    @Size(min = 5, max = 20, message = "label must not be less than two characters")
    private String flag;

    @Size(max = 200, message = "label must not be less than two characters")
    private String description;

    private boolean enabled;

    private boolean deprecated;

    private Date expires;

    @NotNull
    private FeatureList type = FeatureList.PERMISSION;

    private Selectors selectors;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isDeprecated() {
        return deprecated;
    }

    public void setDeprecated(boolean deprecated) {
        this.deprecated = deprecated;
    }

    public Date getExpires() {
        return expires;
    }

    public void setExpires(Date expires) {
        this.expires = expires;
    }

    public FeatureList getType() {
        return type;
    }

    public void setType(FeatureList type) {
        this.type = type;
    }

    public Selectors getSelectors() {
        return selectors;
    }

    public void setSelectors(Selectors selectors) {
        this.selectors = selectors;
    }
}
