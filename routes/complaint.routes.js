import express from 'express';
import { getComplaints, createComplaint, updateComplaint, deleteComplaint}
 from '../controllers/complaint.controller.js';

const router = express.Router();

router.get('/', getComplaints); 
router.post('/', createComplaint);
router.put('/:id/resolve', updateComplaint);
router.delete('/:id', deleteComplaint);

export default router;