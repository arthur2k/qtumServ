import mongoose, { Schema } from 'mongoose'

const createDappsSchema = new Schema({
  name: {
    type: String
  },
  rfc: {
    type: String
  },
  id_contrac: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

createDappsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      rfc: this.rfc,
      id_contrac: this.id_contrac,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('CreateDapps', createDappsSchema)

export const schema = model.schema
export default model
