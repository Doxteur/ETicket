import React from 'react'
import {BiSupport} from 'react-icons/bi'
// import BiLockOpenAlt
import {BiLockOpenAlt} from 'react-icons/bi'
import {BiLockAlt} from 'react-icons/bi'
function Stats({tickets}) {
  return (
    <div class="mt-4">
    <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <BiSupport color='white' size='2em' />
                </div>

                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">{tickets.tickets.length}</h4>
                    <div class="text-gray-500">Nombre de tickets total</div>
                </div>
            </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-green-600 bg-opacity-75">
                    <BiLockOpenAlt color='white' size='2em' />
                </div>

                <div class="mx-5">
                    {/* TIcket open are all ticket that are not status.FERME OR status.RESOLU */}
                    <h4 class="text-2xl font-semibold text-gray-700">{tickets.tickets.filter(ticket => ticket.status !== 'FERME' && ticket.status !== 'RESOLU').length}</h4>
                    <div class="text-gray-500">Tickets Ouverts</div>
                </div>
            </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-red-600 bg-opacity-75">
                    <BiLockAlt color='white' size='2em' />
                </div>

                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">{tickets.tickets.filter(ticket => ticket.status === 'FERME' || ticket.status === 'RESOLU').length}</h4>
                    <div class="text-gray-500">Tickets Fermés</div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Stats
