let complaints = [
    {id: 1, title: "Complaint 1", description: "complaint 1", status: "open"},
    {id: 2, title: "Complaint 2", description: "complaint 2", status: "resolved"},   
    {id: 3, title: "Complaint 3", description: "complaint 3", status: "open"},
    {id: 4, title: "Complaint 4", description: "complaint 4", status: "resolved"}
]
export const getComplaints = (req, res) => {
    res.json(complaints);
}

export const createComplaint = (req, res) => {
    const newComplaint = req.body;
    complaints.push(newComplaint);
    //res.json(newComplaint);
    res.send("complaint created successfully");
} 

export const updateComplaint = (req, res) => {
    const id = req.params.id;
    complaints = complaints.map(c => c.id == id ? {...c,
        status: "resolved"} : c);
    res.send("complaint updated successfully");
}

export const deleteComplaint = (req, res) => {
    complaints = complaints.filter(c => c.id != req.params.id);
    res.send("complaint deleted successfully");
}