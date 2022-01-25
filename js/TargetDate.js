class TargetDate {
    constructor(m="February", d="1", y="2022", h="2", mi="00", s="00", ap="am") {
        this.dateList = [m, d, y, h, mi, s, ap];
        this.str = this.dateList[0] + " " + this.dateList[1] + ", " + this.dateList[2] + " " + this.dateList[3] + ":" + this.dateList[4] + ":" + this.dateList[5] + " " + this.dateList[6];
    }

    SetValues(m="January", d="1", y="2022", h="2", mi="00", s="00", ap="am") {
        const proposed = [m, d, y, h, mi, s, ap];
        for (let i = 0; i < proposed.length; i++) {
            if (proposed[i] != "")
                this.dateList[i] = proposed[i];
        }

        this.str = this.dateList[0] + " " + this.dateList[1] + ", " + this.dateList[2] + " " + this.dateList[3] + ":" + this.dateList[4] + ":" + this.dateList[5] + " " + this.dateList[6];
    }
};
