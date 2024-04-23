const isValidUUID = require('../utils/isValidUUID');

const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { order } = request.query;
    const categories = await CategoryRepository.findAll(order);
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'ID da categoria inválido.' });
    }

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Categoria não encontrada.' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Nome da categoria é obrigatório.' });
    }

    const categoryExists = await CategoryRepository.findByName(name);

    if (categoryExists) {
      return response.status(400).json({ error: 'Categoria já cadastrada.' });
    }

    const category = await CategoryRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;

    const { name } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'ID da categoria inválido.' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Nome da categoria é obrigatório.' });
    }

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Categoria não encontrada.' });
    }

    const categoryByName = await CategoryRepository.findByEmail(name);

    if (categoryByName && categoryByName.id !== id) {
      return response.status(400).json({ error: 'Categoria já cadastrada.' });
    }

    const category = await CategoryRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'ID da categoria inválido.' });
    }

    await CategoryRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
