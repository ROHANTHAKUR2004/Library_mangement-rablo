import { Schema, model } from 'mongoose';

const loanSchema = new Schema({
  userId:
   { type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  itemId: {
     type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true },
  loanDate: { 
    type: Date, 
    default: Date.now
 },
  dueDate: { 
    type: Date, 
    required: true 
},
  status: {
     type: String, 
      default: 'active'
     },
  remarks: {
     type: String 
    },
});

export default model('Loan', loanSchema);
