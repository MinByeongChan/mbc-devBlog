package com.mbc.devblog.vo;

import java.util.Date;

import javax.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "currdate")
public class Currdate {

	@Column(columnDefinition = "DATETIME default CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	private Date startTime;

}
