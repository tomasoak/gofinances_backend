import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    // Transaction exists?
    const existTranscation = await transactionRepository.findOne(id);

    // Does not exist? Error!
    if (!existTranscation) {
      throw new AppError("Transaction doesn't exist", 400);
    }

    await transactionRepository.remove(existTranscation);
  }
}

export default DeleteTransactionService;
