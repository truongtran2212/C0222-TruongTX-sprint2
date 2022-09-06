package sprint2.demo.model.feedback;

import sprint2.demo.model.bill.Bill;

import javax.persistence.*;

@Entity
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "is_deleted")
    private int isDelete = 0;
    @Column(name = "content")
    private String content;
    @Column(name = "feedbackDate")
    private String feedbackDate;
    @Column(name = "image")
    private String image;
    @Column(name = "rate")
    private int rate;

    @ManyToOne
    @JoinColumn(name = "bill_id", referencedColumnName = "id")
    private Bill bill;

    public Feedback() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(int isDelete) {
        this.isDelete = isDelete;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFeedbackDate() {
        return feedbackDate;
    }

    public void setFeedbackDate(String feedbackDate) {
        this.feedbackDate = feedbackDate;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }
}
