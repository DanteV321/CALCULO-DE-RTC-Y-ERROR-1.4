        function calculate() {
            let multiplicador = parseFloat(document.getElementById('multiplicador').value) || 1;
            let ia1Primario = parseFloat(document.getElementById('ia1Primario').value) || 0;
            let ia1Secundario = parseFloat(document.getElementById('ia1Secundario').value) || 1;
            let ic1Primario = parseFloat(document.getElementById('ic1Primario').value) || 0;
            let ic1Secundario = parseFloat(document.getElementById('ic1Secundario').value) || 1;
            let ia2Primario = parseFloat(document.getElementById('ia2Primario').value) || 0;
            let ia2Secundario = parseFloat(document.getElementById('ia2Secundario').value) || 1;
            let ic2Primario = parseFloat(document.getElementById('ic2Primario').value) || 0;
            let ic2Secundario = parseFloat(document.getElementById('ic2Secundario').value) || 1;

            let rtcIa1 = (ia1Primario / ia1Secundario).toFixed(3);
            let errorIa1 = (((multiplicador / rtcIa1) - 1) * 100).toFixed(3);
            let rtcIc1 = (ic1Primario / ic1Secundario).toFixed(3);
            let errorIc1 = (((multiplicador / rtcIc1) - 1) * 100).toFixed(3);
            let rtcIa2 = (ia2Primario / ia2Secundario).toFixed(3);
            let errorIa2 = (((multiplicador / rtcIa2) - 1) * 100).toFixed(3);
            let rtcIc2 = (ic2Primario / ic2Secundario).toFixed(3);
            let errorIc2 = (((multiplicador / rtcIc2) - 1) * 100).toFixed(3);

            let errorProm1 = ((parseFloat(errorIa1) + parseFloat(errorIc1)) / 2).toFixed(3);
            let errorProm2 = ((parseFloat(errorIa2) + parseFloat(errorIc2)) / 2).toFixed(3);
            let errorDeProm = ((parseFloat(errorProm1) + parseFloat(errorProm2)) / 2).toFixed(3);
            let multiplicadorEncontrado = ((parseFloat(rtcIa1) + parseFloat(rtcIa2) + parseFloat(rtcIc1) + parseFloat(rtcIc2)) / 4).toFixed(3);

            document.getElementById('rtcIa1').textContent = `RTC Ia1: ${rtcIa1}`;
            document.getElementById('errorIa1').textContent = `% ERROR Ia1: ${errorIa1}%`;
            document.getElementById('rtcIc1').textContent = `RTC Ic1: ${rtcIc1}`;
            document.getElementById('errorIc1').textContent = `% ERROR Ic1: ${errorIc1}%`;
            document.getElementById('rtcIa2').textContent = `RTC Ia2: ${rtcIa2}`;
            document.getElementById('errorIa2').textContent = `% ERROR Ia2: ${errorIa2}%`;
            document.getElementById('rtcIc2').textContent = `RTC Ic2: ${rtcIc2}`;
            document.getElementById('errorIc2').textContent = `% ERROR Ic2: ${errorIc2}%`;
            document.getElementById('errorProm1').textContent = `ERROR PROM 1: ${errorProm1}%`;
            document.getElementById('errorProm2').textContent = `ERROR PROM 2: ${errorProm2}%`;
            document.getElementById('errorDeProm').textContent = `ERROR DE PROM: ${errorDeProm}%`;
            document.getElementById('multiplicadorEncontrado').textContent = `MULTIPLICADOR ENCONTRADO: ${multiplicadorEncontrado}`;
        }

        function clearFields() {
            // Limpiar todos los campos
            document.getElementById('multiplicador').value = '';
            document.getElementById('ia1Primario').value = '';
            document.getElementById('ia1Secundario').value = '';
            document.getElementById('ic1Primario').value = '';
            document.getElementById('ic1Secundario').value = '';
            document.getElementById('ia2Primario').value = '';
            document.getElementById('ia2Secundario').value = '';
            document.getElementById('ic2Primario').value = '';
            document.getElementById('ic2Secundario').value = '';

            // Limpiar los resultados
            document.getElementById('rtcIa1').textContent = '';
            document.getElementById('errorIa1').textContent = '';
            document.getElementById('rtcIc1').textContent = '';
            document.getElementById('errorIc1').textContent = '';
            document.getElementById('rtcIa2').textContent = '';
            document.getElementById('errorIa2').textContent = '';
            document.getElementById('rtcIc2').textContent = '';
            document.getElementById('errorIc2').textContent = '';
            document.getElementById('errorProm1').textContent = '';
            document.getElementById('errorProm2').textContent = '';
            document.getElementById('errorDeProm').textContent = '';
            document.getElementById('multiplicadorEncontrado').textContent = '';
        }

        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll("input").forEach(input => {
                input.addEventListener("input", calculate);
            });
        });